import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function CatalogoProductos() {

    return (
        <div className="container">
            <div className="row mt-5">
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-xl-4 d-flex justify-content-center">
                            {/* Torta de Chocolate */}
                            <div className="card" style={{ width: '70%' }} data-category="torta-cuadrada">
                                <img src="assets/images/TortaChocolate.png" className="card-img-top" alt="Torta de Chocolate" />
                                <div className="card-body">
                                    <h5 className="card-title" style={{ fontFamily: 'Dancing Script', fontSize: '160%' }}>
                                        Torta de Chocolate
                                    </h5>
                                    <p className="card-text">Clásica y deliciosa, elaborada con suave bizcocho de cacao y un intenso sabor a chocolate.</p>
                                    <h4>
                                        <p style={{ color: '#8B4513' }}>$45.000</p>
                                    </h4>
                                    <Link to="#" className="btn botones">Agregar al Carrito</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 d-flex justify-content-center">
                            {/* Torta de Frutas */}
                            <div className="card" style={{ width: '70%' }} data-category="torta-cuadrada">
                                <img src="assets/images/TortaFruta.png" className="card-img-top" alt="Torta de Frutas" />
                                <div className="card-body">
                                    <h5 className="card-title" style={{ fontFamily: 'Dancing Script', fontSize: '160%' }}>
                                        Torta de Frutas
                                    </h5>
                                    <p className="card-text">Fresca y colorida, rellena con frutas de temporada y un bizcocho ligero, cobertura de crema.</p>
                                    <h4>
                                        <p style={{ color: '#8B4513' }}>$50.000</p>
                                    </h4>
                                    <Link to="#" className="btn botones">Agregar al Carrito</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 d-flex justify-content-center">
                            {/* Torta de Vainilla */}
                            <div className="card" style={{ width: '70%' }} data-category="torta-circular">
                                <img src="assets/images/TortaVainilla.png" className="card-img-top" alt="Torta de Vainilla" />
                                <div className="card-body">
                                    <h5 className="card-title" style={{ fontFamily: 'Dancing Script', fontSize: '160%' }}>
                                        Torta de Vainilla
                                    </h5>
                                    <p className="card-text">Un clásico de sabor suave, con esponjoso bizcocho de vainilla y cobertura cremosa.</p>
                                    <h4>
                                        <p style={{ color: '#8B4513' }}>$40.000</p>
                                    </h4>
                                    <Link to="#" className="btn botones">Agregar al Carrito</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-xl-4 d-flex justify-content-center">
                            {/* Torta de Manjar */}
                            <div className="card" style={{ width: '70%' }} data-category="torta-circular">
                                <img src="assets/images/TortaCircularManjar.png" className="card-img-top" alt="Torta de Manjar" />
                                <div className="card-body">
                                    <h5 className="card-title" style={{ fontFamily: 'Dancing Script', fontSize: '160%' }}>
                                        Torta de Manjar
                                    </h5>
                                    <p className="card-text">Rellena de tradicional manjar chileno, con un toque casero y dulce irresistible.</p>
                                    <h4>
                                        <p style={{ color: '#8B4513' }}>$42.000</p>
                                    </h4>
                                    <Link to="#" className="btn botones">Agregar al Carrito</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 d-flex justify-content-center">
                            {/* Mousse de Chocolate */}
                            <div className="card" style={{ width: '70%' }}>
                                <img src="assets/images/PostreMousseChocolate.png" className="card-img-top" alt="Mousse de Chocolate" />
                                <div className="card-body">
                                    <h5 className="card-title" style={{ fontFamily: 'Dancing Script', fontSize: '160%' }}>
                                        Mousse de Chocolate
                                    </h5>
                                    <p className="card-text">Textura ligera y cremosa, con un sabor intenso para los amantes del chocolate.</p>
                                    <h4>
                                        <p style={{ color: '#8B4513' }}>$5.000</p>
                                    </h4>
                                    <Link to="#" className="btn botones">Agregar al Carrito</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 d-flex justify-content-center">
                            {/* Tiramisú Clásico */}
                            <div className="card" style={{ width: '70%' }}>
                                <img src="assets/images/PostreTiramisu.png" className="card-img-top" alt="Tiramisú Clásico" />
                                <div className="card-body">
                                    <h5 className="card-title" style={{ fontFamily: 'Dancing Script', fontSize: '160%' }}>
                                        Tiramisú Clásico
                                    </h5>
                                    <p className="card-text">Postre italiano con capas de bizcocho, café y suave crema de mascarpone.</p>
                                    <h4>
                                        <p style={{ color: '#8B4513' }}>$5.500</p>
                                    </h4>
                                    <Link to="#" className="btn botones">Agregar al Carrito</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-xl-4 d-flex justify-content-center">
                            {/* Torta de Naranja */}
                            <div className="card" style={{ width: '70%' }}>
                                <img src="assets/images/TortaNaranja.png" className="card-img-top" alt="Torta de Naranja" />
                                <div className="card-body">
                                    <h5 className="card-title" style={{ fontFamily: 'Dancing Script', fontSize: '160%' }}>
                                        Torta de Naranja
                                    </h5>
                                    <p className="card-text">Opción saludable, con el frescor de la naranja y apta para quienes evitan el azúcar.</p>
                                    <h4>
                                        <p style={{ color: '#8B4513' }}>$48.000</p>
                                    </h4>
                                    <Link to="#" className="btn botones">Agregar al Carrito</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 d-flex justify-content-center">
                            {/* Cheesecake sin Azúcar */}
                            <div className="card" style={{ width: '70%' }}>
                                <img src="assets/images/Cheesecake.png" className="card-img-top" alt="Cheesecake sin Azúcar" />
                                <div className="card-body">
                                    <h5 className="card-title" style={{ fontFamily: 'Dancing Script', fontSize: '160%' }}>
                                        Cheesecake sin Azúcar
                                    </h5>
                                    <p className="card-text">Suave y cremoso, endulzado naturalmente para disfrutar sin culpas.</p>
                                    <h4>
                                        <p style={{ color: '#8B4513' }}>$47.000</p>
                                    </h4>
                                    <Link to="#" className="btn botones">Agregar al Carrito</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 d-flex justify-content-center">
                            {/* Empanada de Manzana */}
                            <div className="card" style={{ width: '70%' }}>
                                <img src="assets/images/EmpanadaManzana.png" className="card-img-top" alt="Empanada de Manzana" />
                                <div className="card-body">
                                    <h5 className="card-title" style={{ fontFamily: 'Dancing Script', fontSize: '160%' }}>
                                        Empanada de Manzana
                                    </h5>
                                    <p className="card-text">Clásico postre de masa dorada horneada y relleno de manzanas especiadas.</p>
                                    <h4>
                                        <p style={{ color: '#8B4513' }}>$3.000</p>
                                    </h4>
                                    <Link to="#" className="btn botones">Agregar al Carrito</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-xl-4 d-flex justify-content-center">
                            {/* Pan sin Gluten */}
                            <div className="card" style={{ width: '70%' }}>
                                <img src="assets/images/PanSinGluten.png" className="card-img-top" alt="Pan sin Gluten" />
                                <div className="card-body">
                                    <h5 className="card-title" style={{ fontFamily: 'Dancing Script', fontSize: '160%' }}>
                                        Pan sin Gluten
                                    </h5>
                                    <p className="card-text">Alternativa nutritiva y ligera, ideal para personas celíacas o con intolerancia al gluten.</p>
                                    <h4>
                                        <p style={{ color: '#8B4513' }}>$3.500</p>
                                    </h4>
                                    <Link to="#" className="btn botones">Agregar al Carrito</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 d-flex justify-content-center">
                            {/* Tarta de Santiago */}
                            <div className="card" style={{ width: '70%' }}>
                                <img src="assets/images/TartaSantiago.png" className="card-img-top" alt="Tarta de Santiago" />
                                <div className="card-body">
                                    <h5 className="card-title" style={{ fontFamily: 'Dancing Script', fontSize: '160%' }}>
                                        Tarta de Santiago
                                    </h5>
                                    <p className="card-text">Receta tradicional gallega a base de almendras, con un sabor auténtico y delicado.</p>
                                    <h4>
                                        <p style={{ color: '#8B4513' }}>$6.000</p>
                                    </h4>
                                    <Link to="#" className="btn botones">Agregar al Carrito</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 d-flex justify-content-center">
                            {/* Brownie sin Gluten */}
                            <div className="card" style={{ width: '70%' }}>
                                <img src="assets/images/Brownie.png" className="card-img-top" alt="Brownie sin Gluten" />
                                <div className="card-body">
                                    <h5 className="card-title" style={{ fontFamily: 'Dancing Script', fontSize: '160%' }}>
                                        Brownie sin Gluten
                                    </h5>
                                    <p className="card-text">Denso, húmedo y chocolatoso, pensado para quienes buscan opciones sin gluten.</p>
                                    <h4>
                                        <p style={{ color: '#8B4513' }}>$4.000</p>
                                    </h4>
                                    <Link to="#" className="btn botones">Agregar al Carrito</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-xl-4 d-flex justify-content-center">
                            {/* Torta Vegana de Chocolate */}
                            <div className="card" style={{ width: '70%' }}>
                                <img src="assets/images/TortaVeganaChocolate.png" className="card-img-top" alt="Torta Vegana de Chocolate" />
                                <div className="card-body">
                                    <h5 className="card-title" style={{ fontFamily: 'Dancing Script', fontSize: '160%' }}>
                                        Torta Vegana de Chocolate
                                    </h5>
                                    <p className="card-text">Sin ingredientes de origen animal, pero con todo el sabor y la intensidad del cacao.</p>
                                    <h4>
                                        <p style={{ color: '#8B4513' }}>$50.000</p>
                                    </h4>
                                    <Link to="#" className="btn botones">Agregar al Carrito</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 d-flex justify-content-center">
                            {/* Galletas Veganas de Avena */}
                            <div className="card" style={{ width: '70%' }}>
                                <img src="assets/images/GalletaAvena.png" className="card-img-top" alt="Galletas Veganas de Avena" />
                                <div className="card-body">
                                    <h5 className="card-title" style={{ fontFamily: 'Dancing Script', fontSize: '160%' }}>
                                        Galletas Veganas de Avena
                                    </h5>
                                    <p className="card-text">Crujientes y saludables, endulzadas de forma ligera, perfectas para acompañar un café o té.</p>
                                    <h4>
                                        <p style={{ color: '#8B4513' }}>$4.500</p>
                                    </h4>
                                    <Link to="#" className="btn botones">Agregar al Carrito</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 d-flex justify-content-center">
                            {/* Torta Especial de Cumpleaños */}
                            <div className="card" style={{ width: '70%' }}>
                                <img src="assets/images/TortaCumpleaños.png" className="card-img-top" alt="Torta Especial de Cumpleaños" />
                                <div className="card-body">
                                    <h5 className="card-title" style={{ fontFamily: 'Dancing Script', fontSize: '160%' }}>
                                        Torta Esp. de Cumpleaños
                                    </h5>
                                    <p className="card-text">Personalizada para celebrar momentos únicos, con diseños y sabores a elección.</p>
                                    <h4>
                                        <p style={{ color: '#8B4513' }}>$55.000</p>
                                    </h4>
                                    <Link to="#" className="btn botones">Agregar al Carrito</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-xl-4 d-flex justify-content-center">
                            {/* Torta Especial de Boda */}
                            <div className="card" style={{ width: '70%' }}>
                                <img src="assets/images/TortaBoda.png" className="card-img-top" alt="Torta Especial de Boda" />
                                <div className="card-body">
                                    <h5 className="card-title" style={{ fontFamily: 'Dancing Script', fontSize: '160%' }}>
                                        Torta Especial de Boda
                                    </h5>
                                    <p className="card-text">Elegante y sofisticada, diseñada para el gran día, con detalles únicos y un sabor inolvidable.</p>
                                    <h4>
                                        <p style={{ color: '#8B4513' }}>$60.000</p>
                                    </h4>
                                    <Link to="#" className="btn botones">Agregar al Carrito</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>






    );
}

export default CatalogoProductos;