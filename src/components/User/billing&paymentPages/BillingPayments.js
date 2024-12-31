import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Table,
  Button,
  Modal,
  Form,
  Badge,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./BillingPayments.css";

const BillingPayments = () => {
  const [data, setData] = useState([
    { id: 1, type: "Invoice", date: "2024-12-01", amount: 5000, status: "Paid", description: "Milk delivery for December", method: "UPI" },
    { id: 2, type: "Invoice", date: "2024-11-01", amount: 4000, status: "Pending", description: "Milk delivery for November", method: "Card" },
    { id: 3, type: "Payment", date: "2024-11-30", amount: 5000, method: "UPI" },
    { id: 4, type: "Payment", date: "2024-10-30", amount: 4000, method: "Card" },
    // Add more mock data here
  ]);

  const [searchMonth, setSearchMonth] = useState("");
  const [selectedRow, setSelectedRow] = useState(null);
  const [showAllData, setShowAllData] = useState(false);

  const handleSearch = (e) => {
    setSearchMonth(e.target.value);
  };

  const handleViewDetails = (row) => {
    setSelectedRow(row);
  };

  const handleCloseModal = () => {
    setSelectedRow(null);
  };

  const handleShowAllToggle = () => {
    setShowAllData(!showAllData);
  };

  const filteredData = searchMonth
    ? data.filter((row) => {
        const rowMonth = new Date(row.date).toISOString().slice(0, 7);
        return rowMonth === searchMonth;
      })
    : data;

  const displayedData = showAllData ? data : filteredData;

  return (
    <Container className="mt-5 billing-container">
      <Row className="mb-4 text-center">
        <Col>
          <h1>Invoicing & Billing</h1>
          <p>Manage your invoices and track payment history seamlessly.</p>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <Form.Control
            type="month"
            placeholder="Search by month"
            value={searchMonth}
            onChange={handleSearch}
            className="mb-3 search-container"
          />
        </Col>
        <Col className="text-end">
          <Button variant="primary" onClick={handleShowAllToggle} className="showAllContiner">
            {showAllData ? "Show Search Results" : "Show All Data"}
          </Button>
        </Col>
      </Row>

      <Row>
        <Col className="col-cont">
          <Card className="shadow-sm border-0 billingCard">
            <Card.Body>
              <Card.Title className="cardTitle">Invoices & Payment History</Card.Title>
              <div className="table-container">
                <Table responsive hover>
                  <thead className="Billhead">
                    <tr>
                      <th>Date</th>
                      <th>Type</th>
                      <th>Amount (₹)</th>
                      <th>Status/Method</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {displayedData.map((row, index) => (
                      <tr key={index}>
                        <td>{row.date}</td>
                        <td>{row.type}</td>
                        <td>{row.amount}</td>
                        <td>
                          {row.type === "Invoice" ? (
                            <Badge bg={row.status === "Paid" ? "success" : "danger"}>
                              {row.status}
                            </Badge>
                          ) : (
                            row.method
                          )}
                        </td>
                        <td>
                          <Button
                            variant="info"
                            size="sm"
                            onClick={() => handleViewDetails(row)}
                          >
                            View
                          </Button>
                        </td>
                      </tr>
                    ))}

                    {displayedData.length === 0 && (
                      <tr>
                        <td colSpan="5" className="text-center">
                          No records found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </Table>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Modal for Viewing Details */}
      <Modal show={!!selectedRow} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedRow?.type} Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedRow && (
            <>
              <p>
                <strong>Date:</strong> {selectedRow.date}
              </p>
              <p>
                <strong>Amount:</strong> ₹{selectedRow.amount}
              </p>
              {selectedRow.type === "Invoice" ? (
                <>
                  <p>
                    <strong>Status:</strong> {selectedRow.status}
                  </p>
                  <p>
                    <strong>Description:</strong> {selectedRow.description}
                  </p>
                </>
              ) : (
                <p>
                  <strong>Payment Method:</strong> {selectedRow.method}
                </p>
              )}
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default BillingPayments;



















// import React, { useState } from "react";
// import {
//   Container,
//   Row,
//   Col,
//   Card,
//   Table,
//   Button,
//   Modal,
//   Form,
//   Badge,
// } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./BillingPayments.css";

// const BillingPayments = () => {
//   const [data, setData] = useState([
//     { id: 1, type: "Invoice", date: "2024-12-01", amount: 5000, status: "Paid", description: "Milk delivery for December", method: "UPI" },
//     { id: 2, type: "Invoice", date: "2024-11-01", amount: 4000, status: "Pending", description: "Milk delivery for November", method: "Card" },
//     { id: 3, type: "Payment", date: "2024-11-30", amount: 5000, method: "UPI" },
//     { id: 4, type: "Payment", date: "2024-10-30", amount: 4000, method: "Card" },
//     { id: 2, type: "Invoice", date: "2024-11-01", amount: 4000, status: "Pending", description: "Milk delivery for November", method: "Card" },
//     { id: 2, type: "Invoice", date: "2024-11-01", amount: 4000, status: "Pending", description: "Milk delivery for November", method: "Card" },
//     { id: 2, type: "Invoice", date: "2024-11-01", amount: 4000, status: "Pending", description: "Milk delivery for November", method: "Card" },
//     { id: 2, type: "Invoice", date: "2024-11-01", amount: 4000, status: "Pending", description: "Milk delivery for November", method: "Card" },
//     { id: 2, type: "Invoice", date: "2024-11-01", amount: 4000, status: "Pending", description: "Milk delivery for November", method: "Card" },
//   ]);

//   const [searchMonth, setSearchMonth] = useState("");
//   const [selectedRow, setSelectedRow] = useState(null);

//   const handleSearch = (e) => {
//     setSearchMonth(e.target.value);
//   };

//   const handleViewDetails = (row) => {
//     setSelectedRow(row);
//   };

//   const handleCloseModal = () => {
//     setSelectedRow(null);
//   };

//   const filteredData = data.filter((row) => {
//     if (!searchMonth) return true;
//     const rowMonth = new Date(row.date).toISOString().slice(0, 7);
//     return rowMonth === searchMonth;
//   });

//   return (
//     <Container className="mt-5 billing-container">
//       <Row className="mb-4 text-center ">
//         <Col>
//           <h1>Invoicing & Billing</h1>
//           <p>Manage your invoices and track payment history seamlessly.</p>
//         </Col>
//       </Row>

//       <Row className="mb-4 ">
//         <Col>
//           <Form.Control
//             type="month"
//             placeholder="Search by month"
//             value={searchMonth}
//             onChange={handleSearch}
//             className="mb-3 search-container"
//           />

//           <Card className="shadow-sm border-0 billingCard">
//             <Card.Body>
//               <Card.Title className="cardTitle">Invoices & Payment History</Card.Title>
//               <Table responsive hover>
//                 <thead className="table-light">
//                   <tr>
//                     <th>Date</th>
//                     <th>Type</th>
//                     <th>Amount (₹)</th>
//                     <th>Status/Method</th>
//                     <th>Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {filteredData.map((row) => (
//                     <tr key={row.id}>
//                       <td>{row.date}</td>
//                       <td>{row.type}</td>
//                       <td>{row.amount}</td>
//                       <td>
//                         {row.type === "Invoice" ? (
//                           <Badge bg={row.status === "Paid" ? "success" : "danger"}>
//                             {row.status}
//                           </Badge>
//                         ) : (
//                           row.method
//                         )}
//                       </td>
//                       <td>
//                         <Button
//                           variant="info"
//                           size="sm"
//                           onClick={() => handleViewDetails(row)}
//                         >
//                           View
//                         </Button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </Table>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>

//       {/* Modal for Viewing Details */}
//       <Modal show={!!selectedRow} onHide={handleCloseModal} centered>
//         <Modal.Header closeButton>
//           <Modal.Title>{selectedRow?.type} Details</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {selectedRow && (
//             <>
//               <p><strong>Date:</strong> {selectedRow.date}</p>
//               <p><strong>Amount:</strong> ₹{selectedRow.amount}</p>
//               {selectedRow.type === "Invoice" ? (
//                 <>
//                   <p><strong>Status:</strong> {selectedRow.status}</p>
//                   <p><strong>Description:</strong> {selectedRow.description}</p>
//                 </>
//               ) : (
//                 <p><strong>Payment Method:</strong> {selectedRow.method}</p>
//               )}
//             </>
//           )}
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleCloseModal}>
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </Container>
//   );
// };

// export default BillingPayments;




// import React, { useState } from "react";
// import { Container, Row, Col, Card, Table, Button, Modal, Badge, Alert } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./BillingPayments.css";

// const BillingPayments = () => {
//   const [invoices, setInvoices] = useState([
//     { id: 1, date: "2024-12-01", amount: 5000, status: "Paid", description: "Milk delivery for December" },
//     { id: 2, date: "2024-11-01", amount: 4000, status: "Pending", description: "Milk delivery for November" },
//   ]);

//   const [paymentHistory, setPaymentHistory] = useState([
//     { id: 1, date: "2024-11-30", amount: 5000, method: "UPI" },
//     { id: 2, date: "2024-10-30", amount: 4000, method: "Card" },
//   ]);

//   const [selectedInvoice, setSelectedInvoice] = useState(null);

  

//   const handleViewInvoice = (invoice) => {
//     setSelectedInvoice(invoice);
//   };

//   const handleCloseModal = () => {
//     setSelectedInvoice(null);
//   };

//   return (
//     <Container className="mt-5 Invoicing-billContainer">
//       <Row className="mb-4 text-center">
//         <Col>
//           <h1>Invoicing & Billing</h1>
//           <p>Manage your invoices and track payment history seamlessly.</p>
//         </Col>
//       </Row>

//       {/* Outstanding Invoices Section */}
//       <Row className="mb-4 ">
//         <Col>
//           <Card className="shadow-sm border-0 bg-info" style={{ background: "rgba(255, 255, 255, 0.8)" }}>
//             <Card.Body>
//               <Card.Title className="cardTitle">Outstanding Invoices</Card.Title>
//               <Table responsive hover>
//                 <thead className="table-light bg-success">
//                   <tr className="heading-row">
//                     <th>Date</th>
//                     <th>Amount (₹)</th>
//                     <th>Status</th>
//                     <th>Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {invoices.map((invoice) => (
//                     <tr key={invoice.id}>
//                       <td>{invoice.date}</td>
//                       <td>{invoice.amount}</td>
//                       <td>
//                         <Badge bg={invoice.status === "Paid" ? "success" : "danger"}>{invoice.status}</Badge>
//                       </td>
//                       <td>
//                         <Button
//                           variant="info"
//                           size="sm"
//                           className="me-2"
//                           onClick={() => handleViewInvoice(invoice)}
//                         >
//                           View
//                         </Button>
                        
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </Table>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>

//       {/* Payment History Section */}
//       <Row className="mb-4">
//         <Col>
//           <Card className="shadow-sm border-0 bg-info" style={{ background: "rgba(255, 255, 255, 0.8)" }}>
//             <Card.Body>
//               <Card.Title className="cardTitle">Payment History</Card.Title>
//               <Table responsive hover>
//                 <thead className="table-light">
//                   <tr className="heading-row">
//                     <th>Date</th>
//                     <th>Amount (₹)</th>
//                     <th>Method</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {paymentHistory.map((payment) => (
//                     <tr key={payment.id}>
//                       <td>{payment.date}</td>
//                       <td>{payment.amount}</td>
//                       <td>{payment.method}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </Table>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>

//       {/* Invoice Modal */}
//       <Modal show={!!selectedInvoice} onHide={handleCloseModal} centered>
//         <Modal.Header closeButton>
//           <Modal.Title>Invoice Details</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {selectedInvoice && (
//             <>
//               <p><strong>Date:</strong> {selectedInvoice.date}</p>
//               <p><strong>Amount:</strong> ₹{selectedInvoice.amount}</p>
//               <p><strong>Status:</strong> {selectedInvoice.status}</p>
//               <p><strong>Description:</strong> {selectedInvoice.description}</p>
//             </>
//           )}
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleCloseModal}>
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </Container>
//   );
// };

// export default BillingPayments;









//---------------------------------------------


