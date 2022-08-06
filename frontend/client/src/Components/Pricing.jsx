import React from 'react'
import MyNavbar from "./MyNavbar.jsx"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Pricing() {
  return (
    <div className="App">
      <MyNavbar />
      <div className="packages">
        <Card className="card" bg="dark" variant="dark">
          <Card.Header>Basic Package ($999.99 Annually)</Card.Header>
          <Card.Body>
            <Card.Title>Features</Card.Title>
            <Card.Text>
              <ul>
                <li>9am-5pm Support</li>
                <li>Ad Consulting</li>
                <li>Roadmap to Success</li>
                <li>6% Royalty Rate</li>
                <li>Paid Promotion on the MOON Website</li>
              </ul>
              <div className="d-grid gap-2" >
                <Button href="/packages/basic" variant="secondary">Purchase</Button>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="card" bg="dark" variant="dark">
          <Card.Header>Success Package ($1299.99 Annually)</Card.Header>
          <Card.Body>
            <Card.Title>Features</Card.Title>
            <Card.Text>
              <ul>
                <li>9am-5pm Support</li>
                <li>Ad Consulting</li>
                <li>Roadmap to Success</li>
                <li>4% Royalty Rate</li>
                <li>Free Promotion on the MOON Website</li>
              </ul>
              <div className="d-grid gap-2" >
                <Button href="/packages/success" variant="secondary">Purchase</Button>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="card" bg="dark" variant="dark">
          <Card.Header>Premium Package ($1999.99 Annually)</Card.Header>
          <Card.Body>
            <Card.Title>Features</Card.Title>
            <Card.Text>
              <ul>
                <li>24/7 Support</li>
                <li>Ad Consulting</li>
                <li>Roadmap to Success</li>
                <li>2.5% Royalty Rate</li>
                <li>Free Promotion on the MOON Website</li>
              </ul>
              <div className="d-grid gap-2" >
                <Button href="/packages/premium" variant="secondary">Purchase</Button>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default Pricing