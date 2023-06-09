const Lists = () => {
    return (
        <section className="lists">
            <h5>Listado jugadores/as</h5>
            <div className="container-cards">
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Apellido y nombre</th>
                        <th scope="col">N° DNI</th>
                        <th scope="col">Fecha nac.</th>
                        {/* <th scope="col">Equipo</th>
                        <th scope="col">Categoría</th> */}
                        <th scope="col">Condición</th>
                        {/* <th scope="col">Estado</th> */}
                        <th scope="col">Seguro</th>
                        {/* <th scope="col">Últ. partido</th>
                        <th scope="col">Pase hasta</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Dip, Axel Brian</td>
                            <td>39.318.614</td>
                            <td>30/11/94 (28 años)</td>
                            {/* <td>Olimpo</td>
                            <td>Primera (masculino)</td> */}
                            <td>Habilitado</td>
                            {/* <td>Activo</td> */}
                            <td>Dar de baja</td>
                            {/* <td>9/6/2023</td>
                            <td>9/1/2025</td> */}
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
};
export default Lists;