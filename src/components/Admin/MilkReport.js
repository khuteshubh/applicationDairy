// MilkReport.js
import React from "react";
import "./MilkReport.css";

const MilkReport = () => {
  return (
    <div className="milk-report">
      <header className="report-header">
        <h1>Milk Report Generator</h1>
        <button className="switch-lang">Switch to Marathi</button>
      </header>

      <section className="milk-totals">
        <h2>Milk Totals</h2>
        <table>
          <thead>
            <tr>
              <th>DATE</th>
              <th>SESSION</th>
              <th>FAT</th>
              <th>SNF</th>
              <th>RATE/LITER</th>
              <th>WEIGHT</th>
              <th>TOTAL BONUS</th>
              <th>TOTAL AMOUNT ₹</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>22/08/2024, 01:28:31 pm</td>
              <td>evening</td>
              <td>5</td>
              <td>9</td>
              <td>40</td>
              <td>10</td>
              <td>0</td>
              <td>Rs: 400</td>
            </tr>
            <tr>
              <td>22/08/2024, 01:45:44 pm</td>
              <td>evening</td>
              <td>4.5</td>
              <td>10</td>
              <td>36</td>
              <td>23</td>
              <td>0</td>
              <td>Rs: 828</td>
            </tr>
            <tr>
              <td>22/08/2024, 02:02:51 pm</td>
              <td>evening</td>
              <td>3.6</td>
              <td>8</td>
              <td>28.8</td>
              <td>25</td>
              <td>0</td>
              <td>Rs: 720</td>
            </tr>
            <tr>
              <td>23/08/2024, 10:41:04 am</td>
              <td>morning</td>
              <td>8.9</td>
              <td>9</td>
              <td>71.2</td>
              <td>5.5</td>
              <td>0</td>
              <td>Rs: 391.6</td>
            </tr>
            <tr>
              <td>23/08/2024, 12:00:06 pm</td>
              <td>evening</td>
              <td>5</td>
              <td>9</td>
              <td>60</td>
              <td>5</td>
              <td>0</td>
              <td>Rs: 300</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="averages-totals">
        <h2>Averages & Totals</h2>
        <table>
          <tbody>
            <tr>
              <td>Avg. Fat</td>
              <td>5.40</td>
            </tr>
            <tr>
              <td>Avg. SNF</td>
              <td>9.00</td>
            </tr>
            <tr>
              <td>Avg. Degree</td>
              <td>28.00</td>
            </tr>
            <tr>
              <td>Avg. Rate/Liter</td>
              <td>47.20</td>
            </tr>
            <tr>
              <td>Total Weight</td>
              <td>68.500</td>
            </tr>
            <tr>
              <td>Total Amount</td>
              <td>2639.6 ₹</td>
            </tr>
          </tbody>
        </table>
      </section>

      <footer className="report-footer">
        <button className="download-btn">Download PDF</button>
        <button className="cancel-btn">Cancel</button>
        <p>Bill Generation Date: 8/26/2024 12:42:57 PM</p>
      </footer>
    </div>
  );
};

export default MilkReport;
