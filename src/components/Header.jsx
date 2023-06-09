const Header = () => {
    return (
        <section className="header">
            <h1>Pases</h1>
            <select name="team" id="team">
                <option value="team">Seleccionar equipo</option>
                <option value="team1">Team 1</option>
                <option value="team2">Team 2</option>
                <option value="team3">Team 3</option>
                <option value="team4">Team 4</option>
                <option value="team5">Team 5</option>
            </select>
            <select name="category" id="category">
                <option value="category">Seleccionar categoría</option>
                <option value="category1">Category 1</option>
                <option value="category2">Category 2</option>
                <option value="category3">Category 3</option>
                <option value="category4">Category 4</option>
                <option value="category5">Category 5</option>
            </select>
            <div className="buttons-header">
                <button>Descargar planilla</button>
                <button>Agregar jugador/a</button>
            </div>
        </section>
    );
};

export default Header;