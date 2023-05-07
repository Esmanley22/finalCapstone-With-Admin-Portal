import React from 'react';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Container, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';


function CarouselSlide() {
  return (
    <div className=''>
    <div className='  flex flex-row justify-center mx-auto bg-cover bg-fixed carousel-dark'>
      
      <div>
        <Container>
          <Row>
          <Col xs lg="2"></Col>

          <Col>
          <Carousel fade>

            <Carousel.Item>
              <Image
                className="d-block align-items-center"
                style={{height: "550px", width: "100%" }}
                src="https://images.surferseo.art/6a3599d2-2780-4ba5-a5a4-9fc85ade9579.png" thumbnail
                alt="First slide"
              />

              <Carousel.Caption>
                {/* If we needed a caption */}
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <Image
                className="d-block "
                style={{height: "550px", width: "100%" }}
                src="https://static.vecteezy.com/system/resources/previews/008/193/572/original/candlestick-trading-chart-patterns-for-traders-neutral-candle-pattern-chart-forex-stock-cryptocurrency-etc-trading-signal-stock-market-analysis-forex-analysis-vector.jpg" thumbnail
                alt="Second slide"
              />
              <Carousel.Caption>
                {/* If we needed a caption */}
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <Image
                className="d-block "
                style={{height: "550px", width: "100%" }}
                src="https://forexbee.co/wp-content/uploads/2022/01/bearish-candlestick-patterns-1.png" 
                alt="Third slide"
              />
              
              <Carousel.Caption>
                {/* If we needed a caption */}
              </Carousel.Caption>
              
            </Carousel.Item>
          </Carousel>
          </Col>

          <Col xs lg="2"></Col>
        </Row>
        </Container>
        </div>
      </div>
    </div>
  );
}

export default CarouselSlide;

