import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { HouseFill, ArrowRight, EmojiAngryFill, EmojiSmileFill, EmojiHeartEyesFill, EmojiExpressionlessFill, EmojiFrownFill, Speedometer, FilePdfFill } from 'react-bootstrap-icons';
import './index.css';
import Spinner from 'react-bootstrap/Spinner';

function CribCrendentials({ inspectionData, isLoading }) {
    return (
        <div className='crib-credentials-container'>
            <h2 style={{ marginTop: "20px", marginBottom: '20px' }}>{inspectionData["Property Address"]}</h2>
            <Row>
                <Col md="6"><Image src="detached-house.jpg" height={"400px"} /></Col>
                <Col md="6">
                    <Image src="google-maps-api.png" height={"275px"} />


                    <Row style={{ marginTop: "20px" }}>
                        {isLoading &&
                            <Spinner animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                        }
                        {inspectionData &&
                            <>
                                <Col md="4">
                                    <p><HouseFill /> {inspectionData["Property Style"]}</p>
                                    <p><ArrowRight /> {inspectionData.Bedrooms} Bedrooms</p>
                                    <p><ArrowRight /> {inspectionData["Baths (With WC)"]} Bathrooms</p>
                                </Col>
                                <Col md="8">
                                    <p><strong>Assessment Date: {inspectionData["Assesment Date"]}</strong></p>
                                    <p><FilePdfFill /> Download full inspection report</p>
                                </Col>
                            </>
                        }
                    </Row>

                </Col>
            </Row>
            <Row className='property-scoring' style={{ marginTop: "20px", background: "rgb(0, 94, 184)", color: "white", padding: "20px" }}>
                <h3>Location</h3>
                <Col md="8" style={{ marginTop: "20px" }}>
                    <Row>
                        <Col>
                            <EmojiAngryFill /> <p>Schools</p>
                        </Col>
                        <Col>
                            <EmojiSmileFill /> <p>Crime</p>
                        </Col>
                        <Col>
                            <EmojiHeartEyesFill /> <p>Travel</p>
                        </Col>
                        <Col>
                            <EmojiExpressionlessFill /> <p>Neighborhood</p>
                        </Col>
                        <Col>
                            <EmojiFrownFill /> <p>Amenities</p>
                        </Col>
                    </Row>
                    <Row>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget interdum urna. Phasellus non aliquam dolor. Praesent consequat suscipit odio vitae luctus. Vivamus eu magna vel nunc mattis tincidunt vel tempor enim. Curabitur rhoncus massa a mollis mollis. Nam enim mi, lobortis eu blandit nec, consectetur a quam.
                        </p>
                    </Row>
                </Col>
                <Col md="4" style={{ textAlign: "center" }}>
                    <Speedometer style={{ fontSize: "11rem", color: "white" }} />
                </Col>
            </Row>

            <Row className='property-scoring' style={{ marginTop: "20px" }}>
                <Col md="4" style={{ marginTop: "20px" }}>
                    <h3>Sustainability</h3>
                    <Image src="eco-score.png" height={"100px"} />
                    <Row>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget interdum urna. Phasellus non aliquam dolor. Praesent consequat suscipit odio vitae luctus. Vivamus eu magna vel nunc mattis tincidunt vel tempor enim. Curabitur rhoncus massa a mollis mollis. Nam enim mi, lobortis eu blandit nec, consectetur a quam.
                        </p>
                    </Row>
                </Col>
                <Col md="8" style={{ marginTop: "20px" }}>
                    <h3>Current Property Value - £{inspectionData["Present Condition Value"]}</h3>
                    <Row>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget interdum urna. Phasellus non aliquam dolor. Praesent consequat suscipit odio vitae luctus. Vivamus eu magna vel nunc mattis tincidunt vel tempor enim. Curabitur rhoncus massa a mollis mollis. Nam enim mi, lobortis eu blandit nec, consectetur a quam.
                        </p>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}

export default CribCrendentials;
