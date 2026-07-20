"""
Erick Sergio · Portfólio — API Flask (estrutura de referência)
----------------------------------------------------------------
Este back-end é apenas um esqueleto para demonstrar como o portfólio
poderia ser servido dinamicamente (projetos vindos de um banco de dados,
formulário de contato salvo em SQLite, etc). O site em React já funciona
sozinho com os dados em `frontend/src/data/projects.js`; esta API é um
próximo passo opcional.
"""

from flask import Flask, jsonify, request
from flask_cors import CORS
import sqlite3
import os

app = Flask(__name__)
CORS(app)  # permite que o front-end (React, outra porta) consuma a API

DB_PATH = os.path.join(os.path.dirname(__file__), "portfolio.db")


def get_db():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn


def init_db():
    """Cria as tabelas de exemplo caso ainda não existam."""
    conn = get_db()
    conn.execute(
        """
        CREATE TABLE IF NOT EXISTS projects (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            description TEXT NOT NULL,
            tech TEXT NOT NULL,
            link TEXT
        )
        """
    )
    conn.execute(
        """
        CREATE TABLE IF NOT EXISTS contact_messages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            message TEXT NOT NULL,
            created_at TEXT DEFAULT CURRENT_TIMESTAMP
        )
        """
    )
    conn.commit()
    conn.close()


@app.route("/api/health", methods=["GET"])
def health():
    return jsonify({"status": "ok", "service": "erick-sergio-portfolio-api"})


@app.route("/api/projects", methods=["GET"])
def list_projects():
    """Retorna a lista de projetos (exemplo estático; troque por SELECT no DB)."""
    projects = [
        {
            "name": "TaskFlow",
            "description": "Sistema de organização de tarefas e agenda para o dia a dia, construído com Flask.",
            "tech": ["Python", "Flask", "SQLite3", "JavaScript"],
            "link": "https://github.com/Erickfgfg025",
        },
        {
            "name": "AstroDodge",
            "description": "Jogo 2D em JavaScript puro onde você desvia de asteroides em HTML5 Canvas.",
            "tech": ["JavaScript", "HTML5", "CSS3"],
            "link": "https://github.com/Erickfgfg025",
        },
    ]
    return jsonify(projects)


@app.route("/api/contact", methods=["POST"])
def receive_contact():
    """Recebe uma mensagem do formulário de contato e salva no SQLite."""
    data = request.get_json(silent=True) or request.form

    name = (data.get("name") or "").strip()
    email = (data.get("email") or "").strip()
    message = (data.get("message") or "").strip()

    if not name or not email or not message:
        return jsonify({"error": "Campos obrigatórios: name, email, message."}), 400

    conn = get_db()
    conn.execute(
        "INSERT INTO contact_messages (name, email, message) VALUES (?, ?, ?)",
        (name, email, message),
    )
    conn.commit()
    conn.close()

    return jsonify({"status": "success", "message": "Mensagem recebida com sucesso."}), 201


if __name__ == "__main__":
    init_db()
    app.run(debug=True, port=5000)
