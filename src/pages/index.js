import React from 'react';

function Home() {
    return (
        <div>
            <div className="container">
                <div className="col-lg-12">
                    <div className="container d-flex justify-content-center">
                        <div id="carruselPromociones" className="carousel slide" style={{width: '90%'}}>
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carruselPromociones" data-bs-slide-to="0"
                                    className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carruselPromociones" data-bs-slide-to="1"
                                    aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carruselPromociones" data-bs-slide-to="2"
                                    aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="/assets/images/consejosDePasteleria.png" className="d-block w-100" alt="Consejos" />
                                </div>
                                <div className="carousel-item">
                                    <img src="/assets/images/RecetasExclusivas.png" className="d-block w-100" alt="Recetas" />
                                </div>
                                <div className="carousel-item">
                                    <img src="/assets/images/NoticiasPasteleria.png" className="d-block w-100" alt="Noticias" />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carruselPromociones"
                                data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carruselPromociones"
                                data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <br />

            <h1 className="text-center mb-4" style={{fontFamily: 'Dancing Script', color: '#8B4513'}}>
                Descuentos y Promociones
            </h1>
            <hr style={{color: '#8B4513', height: '10%', borderWidth: '10px'}} />

            <div className="container">
                <div className="row mt-5">
                    <div className="col-xl-4 d-flex justify-content-center">
                        <div className="card" style={{width: '70%', height: '100%'}}>
                            <img src="/assets/images/Codigo50Años.png" className="card-img-top" alt="50 años" />
                            <div className="card-body">
                                <h5 className="card-title" style={{fontFamily: 'Dancing Script', fontSize: '160%'}}>
                                    <strong>Para Mayores de 50 años</strong>
                                </h5>
                                <p>¡50% OFF por registrarte! Código válido solo para nuevos usuarios.
                                    Aplica automáticamente al crear tu cuenta.
                                </p>
                                <center><a href="#" className="btn botones">Canjear</a></center>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 d-flex justify-content-center">
                        <div className="card" style={{width: '70%'}}>
                            <img src="/assets/images/CodigoDeDescuento.png" className="card-img-top" alt="Descuento" />
                            <div className="card-body">
                                <h5 className="card-title" style={{fontFamily: 'Dancing Script', fontSize: '160%'}}>
                                    <strong>Registro con código de descuento</strong>
                                </h5>
                                <p className="card-text">10% OFF al registrarte. Código exclusivo para nuevos usuarios.
                                    Descuento automático en tu primera compra.
                                </p>
                                <center><a href="#" className="btn botones">Canjear</a></center>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 d-flex justify-content-center">
                        <div className="card d-flex flex-column" style={{width: '70%', height: '100%'}}>
                            <img src="/assets/images/TortaGratis.png" className="card-img-top" alt="Torta gratis" />
                            <div className="card-body">
                                <h5 className="card-title" style={{fontFamily: 'Dancing Script', fontSize: '160%'}}>
                                    <strong>Descuento Estudiantes DuocUC</strong>
                                </h5>
                                <p className="card-text">¡Torta GRATIS para estudiantes DuocUC!
                                    Registrate con tu correo institucional y disfruta tu postre sin costo.
                                </p>
                                <center><a href="#" className="btn botones mt-auto">Canjear</a></center>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;