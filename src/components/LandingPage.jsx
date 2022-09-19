import { Col, Container, Row } from "react-bootstrap";
import NavScrollExample from "./Navbbb";
export default function LandingPage() {

    return (
        <div>
            <Container ><NavScrollExample /></Container>
            <br></br>
            <br></br>
            <Container fluid className='d-flex flex-column justify-content-center text-center bg-light'>
                <Row lg={6} className='justify-content-center text-center'>
                    <Col><h4>Motors</h4></Col>
                    <Col><h4>Marketplace</h4></Col>
                    <Col><h4>Farming</h4></Col>

                </Row>

                <br></br>
                <Row lg={5} className='justify-content-center'>
                    <Col>
                        <div>
                            <div class=" text-center">
                                <div class="">
                                    <div >
                                        <select class="form-select form-select-lg mb-3">
                                            <option>Volkswagen</option>
                                            <option>Option 1</option>
                                            <option>Option 2</option>
                                            <option>Option 3</option>
                                            <option>Option 4</option>
                                        </select>
                                    </div>
                                    <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">

                                        <div >
                                            <select class="form-select form-select-lg mb-3">
                                                <option>Max year</option>
                                                <option>Option 1</option>
                                                <option>Option 2</option>
                                                <option>Option 3</option>
                                                <option>Option 4</option>
                                            </select>
                                        </div>
                                        <div >
                                            <select class="form-select form-select-lg mb-3">
                                                <option>Min year</option>
                                                <option>Option 1</option>
                                                <option>Option 2</option>
                                                <option>Option 3</option>
                                                <option>Option 4</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <div class="text-center">
                                <div class=" ">
                                    <div >
                                        <select class="form-select form-select-lg mb-3">
                                            <option>Volkswagen</option>
                                            <option>Option 1</option>
                                            <option>Option 2</option>
                                            <option>Option 3</option>
                                            <option>Option 4</option>
                                        </select>
                                    </div>
                                    <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">


                                        <div >
                                            <select class="form-select form-select-lg mb-3">
                                                <option>Max year</option>
                                                <option>Option 1</option>
                                                <option>Option 2</option>
                                                <option>Option 3</option>
                                                <option>Option 4</option>
                                            </select>
                                        </div>
                                        <div >
                                            <select class="form-select form-select-lg mb-3">
                                                <option>Min year</option>
                                                <option>Option 1</option>
                                                <option>Option 2</option>
                                                <option>Option 3</option>
                                                <option>Option 4</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>

                </Row>
                <div className="m-auto">
                    <button type="button" class="btn btn-primary btn-lg px-4 ">Search Cars</button>
                </div>
                <br></br>

                {/* make dark background container div with 3 card components from react cards */}
                <Container fluid class='bg-dark py-5 my-3'>
                <div class="row justify-content-center">
                        <div class="col-lg-6 ">
                <div className='d-flex justify-content-center gap-5'>
                    <div className='card'>
                        <div class="card-body">
                            <h5 class="card-title">Car 1</h5>
                            <p class="card-text">Some quick example text to build and make up the bulk of the content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                   
                            <div className='card'>
                                <div class="card-body">
                                    <h5 class="card-title">Car 2</h5>
                                    <p class="card-text">Some quick example text to build and make up the bulk of the content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>

                            <div className='card'>
                                <div class="card-body">
                                    <h5 class="card-title">Car 3</h5>
                                    <p class="card-text">Some quick example text to build and make up the bulk of the content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </Container>


                <h5>Popular Searches</h5>
                <br></br>
                <br></br>
                <Row lg={3}>
                    <Col>
                        <ul style={{ listStyleType: "none" }}>
                            <li>Volkswagen Golf</li>
                            <li>BMW 5-Series</li>
                            <li>Audi A4</li>
                            <li>Ford Focus</li>
                            <li>Volkswagen Passat</li>
                            <li>Audi A6</li>
                            <li>BMW 3-Series</li>
                            <li>Toyota Avensis</li>
                        </ul></Col>
                    <Col>
                        <ul style={{ listStyleType: "none" }}>
                            <li>Volkswagen Golf</li>
                            <li>BMW 5-Series</li>
                            <li>Audi A4</li>
                            <li>Ford Focus</li>
                            <li>Volkswagen Passat</li>
                            <li>Audi A6</li>
                            <li>BMW 3-Series</li>
                            <li>Toyota Avensis</li>
                        </ul></Col>
                    <Col>
                        <ul style={{ listStyleType: "none" }}>
                            <li>Volkswagen Golf</li>
                            <li>BMW 5-Series</li>
                            <li>Audi A4</li>
                            <li>Ford Focus</li>
                            <li>Volkswagen Passat</li>
                            <li>Audi A6</li>
                            <li>BMW 3-Series</li>
                            <li>Toyota Avensis</li>
                        </ul></Col>
                </Row>
            </Container>

            <hr></hr>
            <Container className=" bg-light">
                <footer class="py-5">
                    <div class="row">
                        <div class="col-6 col-md-2 mb-3">
                            <h5>Section</h5>
                            <ul class="nav flex-column">
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Home</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Features</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Pricing</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">FAQs</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">About</a></li>
                            </ul>
                        </div>

                        <div class="col-6 col-md-2 mb-3">
                            <h5>Section</h5>
                            <ul class="nav flex-column">
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Home</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Features</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Pricing</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">FAQs</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">About</a></li>
                            </ul>
                        </div>

                        <div class="col-6 col-md-2 mb-3">
                            <h5>Section</h5>
                            <ul class="nav flex-column">
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Home</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Features</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Pricing</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">FAQs</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">About</a></li>
                            </ul>
                        </div>

                        <div class="col-md-5 offset-md-1 mb-3">
                            <form>
                                <h5>Subscribe to our newsletter</h5>
                                <p>Monthly digest of what's new and exciting from us.</p>
                                <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                                    <label for="newsletter1" class="visually-hidden">Email address</label>
                                    <input id="newsletter1" type="text" class="form-control" placeholder="Email address" />
                                    <button class="btn btn-primary" type="button">Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                        <p>© 2022 Company, Inc. All rights reserved.</p>
                        <ul class="list-unstyled d-flex">
                            <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use href="#twitter"></use></svg></a></li>
                            <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use href="#instagram"></use></svg></a></li>
                            <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use href="#facebook"></use></svg></a></li>
                        </ul>
                    </div>
                </footer>
            </Container>
        </div>


    )
}