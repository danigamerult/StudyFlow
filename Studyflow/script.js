// Dados simulados da grade horária (RF01, RF02, RF03, RF04)
const horariosAulas = [
    { hora: "13:00", segunda: "Biologia", terca: "Vazio", quarta: "Matemática", quinta: "Matemática", sexta: "Vazio" },
    { hora: "14:00", segunda: "Biologia", terca: "Matemática", quarta: "História", quinta: "História", sexta: "Química" },
    { hora: "15:00", segunda: "História", terca: "História", quarta: "Química", quinta: "Química", sexta: "Química" },
    { hora: "16:00", segunda: "Vazio", terca: "Química", quarta: "Vazio", quinta: "Vazio", sexta: "Matemática" }
];

// Mapeamento de classes CSS para as cores das matérias
const classMap = {
    "Biologia": "biologia",
    "Matemática": "matematica",
    "História": "historia",
    "Química": "quimica",
    "Vazio": "vazio"
};

const tbody = document.getElementById('schedule-body');

// Função para renderizar a tabela na tela
function renderSchedule() {
    horariosAulas.forEach(row => {
        const tr = document.createElement('tr');

        // Coluna do Horário
        const tdHora = document.createElement('td');
        tdHora.style.backgroundColor = "transparent";
        tdHora.style.fontWeight = "bold";
        tdHora.textContent = row.hora;
        tr.appendChild(tdHora);

        // Dias da semana
        ['segunda', 'terca', 'quarta', 'quinta', 'sexta'].forEach(dia => {
            const tdDia = document.createElement('td');
            const materia = row[dia];
            tdDia.className = classMap[materia] || "";

            if (materia !== "Vazio") {
                tdDia.innerHTML = `
                    <div class="materia-card">
                        <span class="materia-nome">${materia}</span>
                        <span class="materia-detalhes">Lab A1 • Prof. Silva</span>
                    </div>
                `;
            } else {
                tdDia.textContent = "-";
            }
            
            tr.appendChild(tdDia);
        });

        tbody.appendChild(tr);
    });
}

// Inicializa a tabela ao carregar a página
document.addEventListener('DOMContentLoaded', renderSchedule);