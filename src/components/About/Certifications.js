import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ai_900 from "../../Assets/Certifications/AI-900.png"
import dp_900 from "../../Assets/Certifications/dp-900.png"
import dp_100 from "../../Assets/Certifications/dp-100.png"
import proj_mg from "../../Assets/Certifications/Google.png"
import ML from "../../Assets/Certifications/Machine--Learning.jpg"
import DL from "../../Assets/Certifications/DL.jpg"
import python from "../../Assets/Certifications/python.png"
import web from "../../Assets/Certifications/web.png"

function Certifications() {
  return (
    <div>
    <div className="mt-5 pt-5">
    <h1  className="text-center"> MY <strong className="purple"> CERTIFICATIONS 🏆</strong></h1>
    
    <div >
    <Row >


    <Col md ='4' className="cerfication_col">
    <Card className='certification_card'>
    <a href="https://drive.google.com/file/d/1gQwSm3Nci317WlYD3iJVXUTAG507bFMg/view?usp=sharing"> <Card.Img variant="top" className='certification_img'  src={proj_mg}/></a>

      <Card.Body>
        <Card.Title className='purple cert_title'>Foundation of Project Management</Card.Title>
        <p className='supporting_text'>Issued by Google.</p>
        <Card.Text className='cert_card_desc'>
        This Course covers foundational terminology and concepts of project management, along with an understanding of the roles and responsibilities of a project manager. Equip the Learners with the core skills necessary for success in project management
        </Card.Text>
        <Button className="Cert_card_btns" href="https://drive.google.com/file/d/1gQwSm3Nci317WlYD3iJVXUTAG507bFMg/view?usp=sharing">Certificate</Button>

        <Button className="Cert_card_btns" href="https://www.coursera.org/learn/project-management-foundations">About Certification</Button>
      </Card.Body>
    </Card>
    </Col>

    <Col md ='4' className="cerfication_col">
    <Card className='certification_card'>
    <a href="https://www.credly.com/badges/7ff9a2f5-fd13-4569-8c32-8b0adfb6ebdd/public_url"> <Card.Img variant="top" className='certification_img'  src={dp_100}/></a>

      <Card.Body>
        <Card.Title className='purple cert_title'>Microsoft Certified: Azure Data Scientist Associate</Card.Title>
        <p className='supporting_text'>Issued by Microsoft.</p>
        <Card.Text  className='cert_card_desc'>
        Earning the Azure Data Scientist Associate certification validates the skills and knowledge to apply Azure’s machine learning techniques to train, evaluate, and deploy models that solve business problems.
        </Card.Text>
        <Button className="Cert_card_btns" href="https://www.credly.com/badges/7ff9a2f5-fd13-4569-8c32-8b0adfb6ebdd/public_url">Badge</Button>

        <Button className="Cert_card_btns" href="https://learn.microsoft.com/en-us/certifications/exams/dp-100">About Certification</Button>
      </Card.Body>
    </Card>
    </Col>

    <Col md ='4' className="cerfication_col">
    <Card className='certification_card'>
    <a href="https://www.credly.com/badges/b95b4fdb-b5ee-4575-9915-afdcd216fc1c?source=linked_in_profile"> <Card.Img variant="top" className='certification_img'  src={ai_900}/></a>

      <Card.Body>
        <Card.Title className='purple cert_title'>Microsoft Certified: Azure AI Fundamentals</Card.Title>
        <p className='supporting_text'>Issued by Microsoft.</p>
        <Card.Text  className='cert_card_desc'>
        Earners of the Azure AI Fundamentals certification have demonstrated foundational knowledge of machine learning (ML) and artificial intelligence (AI) concepts and related Microsoft Azure services.
        </Card.Text>
        <Button className="Cert_card_btns" href="https://www.credly.com/badges/b95b4fdb-b5ee-4575-9915-afdcd216fc1c?source=linked_in_profile">Badge</Button>

        <Button className="Cert_card_btns" href="https://learn.microsoft.com/en-us/certifications/azure-ai-fundamentals/">About Certification</Button>
      </Card.Body>
    </Card>
    </Col>


    <Col md ='4' className="cerfication_col">
    <Card className='certification_card '>
    <a href="https://www.credly.com/badges/20dfa432-f24c-4021-9c49-b006ad342861?source=linked_in_profile"> <Card.Img variant="top" className='certification_img'  src={dp_900}/></a>

      <Card.Body>
        <Card.Title className='purple cert_title'>Microsoft Certified: Azure Data Fundamentals</Card.Title>
        <p className='supporting_text'>Issued by Microsoft.</p>
        <Card.Text  className='cert_card_desc'>
        Earners of the Azure Data Fundamentals certification have demonstrated foundational knowledge of core data concepts and how they are implemented using Microsoft Azure data services.
        </Card.Text>
        <Button className="Cert_card_btns" href="https://www.credly.com/badges/20dfa432-f24c-4021-9c49-b006ad342861/public_url">Badge</Button>

        <Button className="Cert_card_btns" href="https://learn.microsoft.com/en-us/certifications/azure-data-fundamentals/">About Certification</Button>
      </Card.Body>
    </Card>
    </Col>

    
    
    <Col md ='4' className="cerfication_col">
    <Card className='certification_card '>
    <a href="https://www.udemy.com/certificate/UC-501f8a89-94c7-4dea-92c6-da0e0a12bee2/"> <Card.Img variant="top" className='certification_img'  src={ML}/></a>

      <Card.Body>
        <Card.Title className='purple cert_title'>Machine Learning A-Z : Python & R in Data Science </Card.Title>
        <p className='supporting_text'>Issued by Udemy on (06/2021) .</p>
        <Card.Text  className='cert_card_desc'>
        <ul>
          <li>
          Mastered Machine Learning in Python
          </li>
          <li>
          Build Machine Learning models and know how to combine them to solve any problem.
          </li>
          <li>
          Use Machine Learning for personal purpose
          </li>
          <li>
          Reinforcement Learning, NLP and Deep Learning
          </li>
        </ul>
        </Card.Text>
        <Button className="Cert_card_btns" href="https://www.udemy.com/certificate/UC-501f8a89-94c7-4dea-92c6-da0e0a12bee2/">Certificate</Button>

        <Button className="Cert_card_btns" href="https://www.udemy.com/course/machinelearning/">About Certification</Button>
      </Card.Body>
    </Card>
    </Col>


    <Col md ='4' className="cerfication_col">
    <Card className='certification_card '>
    <a href="https://www.udemy.com/certificate/UC-64e4a830-3991-42b9-ac5f-2adea6ba4aed/"> <Card.Img variant="top" className='certification_img'  src={DL}/></a>

      <Card.Body>
        <Card.Title className='purple cert_title'>Deep Learning A-Z : Hands-on Artificial Neural Networks  </Card.Title>
        <p className='supporting_text'>Issued by Udemy on (08/2021) .</p>
        <Card.Text  className='cert_card_desc'>
        <ul>
          <li>
          Gained hands on experience with Artificial, Convolutional and Recurrent Neural Networks by working on different datasets and projects.
          </li>
          <li>
          Self-Organizing Maps, Boltzmann Machines, AutoEncoders  in practice.
          </li>
        </ul>
        </Card.Text>
        <Button className="Cert_card_btns" href="https://www.udemy.com/certificate/UC-64e4a830-3991-42b9-ac5f-2adea6ba4aed/"> Certificate</Button>

        <Button className="Cert_card_btns" href="https://www.udemy.com/course/deeplearning/">About Certification</Button>
      </Card.Body>
    </Card>
    </Col>

    <Col md ='4' className="cerfication_col">
    <Card className='certification_card '>
    <a href="https://www.udemy.com/certificate/UC-9d67e1f1-f4b1-4054-91df-7bcf9c6e3618/"> <Card.Img variant="top" className='certification_img'  src={python}/></a>

      <Card.Body>
        <Card.Title className='purple pt-4 cert_title'>Python - The complete python bootcamp</Card.Title>
        <p className='supporting_text'>Issued by Udemy on (03/2020) .</p>
        <Card.Text  className='cert_card_desc'>
        <ul>
          <li>
          Python 3.
          </li>
          <li>
          Data Structures and algorithms in python.
          </li>
          <li>
          GUIs in the Jupyter Notebooks.
          </li>
          <li>
          Object Oriented Programming with classes.
          </li>
          <li>
          Jupyter Notebooks  and .py files
          </li>
          <li>
          Solving complex problems.
          </li>
        </ul>
        </Card.Text>
        <Button className="Cert_card_btns" href="https://www.udemy.com/certificate/UC-9d67e1f1-f4b1-4054-91df-7bcf9c6e3618/">Certificate</Button>

        <Button className="Cert_card_btns" href="https://www.udemy.com/course/complete-python-bootcamp/">About Certification</Button>
      </Card.Body>
    </Card>
    </Col>
    

  
    <Col md ='4' className="cerfication_col">
    <Card className='certification_card '>
    <a href="https://www.udemy.com/certificate/UC-ecac4449-0a77-470b-bd10-339e5cd7174f/"> <Card.Img variant="top" className='certification_img'  src={web}/></a>

      <Card.Body>
        <Card.Title className='purple pt-4 cert_title'>Web Development - The Complete web development bootcamp. </Card.Title>
        <p className='supporting_text'>Issued by Udemy on (08/2020) .</p>
        <Card.Text  className='cert_card_desc'>
        <ul>
          <li>
          HTML, CSS, Javascript
          </li>
          <li>
          Bootstrap
          </li>
          <li>
          Node.js
          </li>
          <li>
          React.js (Redux and context API).
          </li>
          <li>
          Express.js
          </li>
          <li>Responsive Web Applications</li>
        </ul>
        </Card.Text>
        <Button className="Cert_card_btns" href="https://www.udemy.com/certificate/UC-ecac4449-0a77-470b-bd10-339e5cd7174f/">Certificate</Button>

        <Button className="Cert_card_btns" href="https://www.udemy.com/course/the-complete-web-development-bootcamp/">About Certification</Button>
      </Card.Body>
    </Card>
    </Col>
    
    </Row>

    </div>
    

  </div>
    </div>
  )
}

export default Certifications
