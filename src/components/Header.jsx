import shield from '../img/shield-corg.svg';

const Header = () => {
    return (
        <section className="header">
            <div className="header-team">
                <img src={shield} alt="shield" className='shield-header'/>
                <h3>Olympic F.C.</h3>
            </div>
            <div className="filters-header">
                <select name="category" id="category" className="form-select" aria-label="Default select example">
                    <option value="category">Seleccionar categoría</option>
                    <option value="category1">Primera (masculino)</option>
                    <option value="category5">Reserva</option>
                    <option value="category5">Sexta (2011/12)</option>
                    <option value="category5">Séptima (2012/14)</option>
                    <option value="category5">Octava (2014/15)</option>
                    <option value="category4">Novena (2016/17)</option>
                    <option value="category2">Primera (femenino)</option>
                    <option value="category3">Veteranos</option>
                </select>
            </div>
            <div className="buttons-header">
                <button className='btn btn-primary'>Descargar planilla</button>
                <button className='btn btn-primary'>Agregar jugador/a</button>
            </div>
        </section>
    );
};

export default Header;