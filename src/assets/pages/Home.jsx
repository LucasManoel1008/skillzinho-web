import React from 'react'
import styles from '../css/home.module.css'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import MainContent from '../components/Home/MainContent.';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons';
import Catalogo from '../components/Catalogo';
function Home() {
 
  return (
    <div>
      <header className='text-center'>
        <h1>Skillzinho</h1>
      </header>
      <div className={styles.content}>
        <Tab.Container id='left-tabs' defaultActiveKey='home'>
          <Row>
              <Col sm={2}>
              <div className={styles.leftNavBar}>
                  <Nav className='flex-column'>
                    <Nav.Item>
                      <Nav.Link eventKey='user'><FontAwesomeIcon icon={faUser} /><span className='p-1'>Usuário</span></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey='home'>Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey='catalogo'>Catálogo</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
              </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey='home'>
                  <MainContent /> {/* Conteudo principal da página */}
                </Tab.Pane>
                <Tab.Pane eventKey='catalogo'>
                  <Catalogo />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>

    </div>
  )
}

export default Home