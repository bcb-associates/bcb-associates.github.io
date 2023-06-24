import { Typography } from "@mui/material";
import "../index.css"

const Home = () => {
  return (
    <main>
      <section>
        <Typography variant="body1">
          <strong>
            <em>BCB ASSOCIATES</em>
          </strong>{" "}
          has long-standing practice of nearly 5 years assisting clients Value
          Added Tax (VAT) related services in Bangladesh. It provides VAT
          Consultancy to several Importers, prominent Companies, Manufacturers,
          Restaurant, Dealers and Traders in Dhaka city and surrounding district
          head quarters.
          <br />
        </Typography>
        <Typography variant="body1" className="inverse">
          <strong>
            <em>BCB ASSOCIATES</em>
          </strong>{" "}
          has been recognized as a Leading VAT Consultancy Firm to the{" "}
          <strong> NBR</strong>. Over the years, it has established its
          reputation as being one of the most professional and reliable firm in
          Bangladesh. It offers the highest standards and exceptional customer
          services. It is an articulate, well organized and driven Legal Advisor
          with a passion for helping the Manufacturers, Importers, Suppliers and
          Traders overcoming their problems about VAT. It works like a watch dog
          to the Government to collect revenue properly like a bridge between
          the clients and the NBR.
          <br />
          <br />
        </Typography>
      </section>
      <section>
        <p>
          <strong> Official strength:</strong>
        </p>
        <br />
        <ol type="a">
          <li>
            <em>Advisors</em>: It takes great support of a panel of Advisors
            including-
            <ol type="I">
              <li>
                Renowned barrister of the Supreme Court Mr. Ziaul Haque , as
                legal Advisor
              </li>
              <li>
                Mr.Tapan Kumar Karmaker(CA.cc), Deputy Comptroller,
                Jahangirnagar University as professional accountant
              </li>
            </ol>
          </li>
          <li>
            <em>Chairman:</em> Beedhan Chandra Barman (MA. LLB), the Chairman
            and head of the firm works as the chief consultant to ensure
            client’s Satisfaction.
          </li>
          <li>
            <em>Directors:</em> Highly qualified Directors always look after the
            official works from Core of their heart for rendering better service
            to the clients as well as the development of the firm.
          </li>
        </ol>
      </section>
      <br />
      <section>
        <p>
          <strong> Main duties performed: </strong>
        </p>
        <ul style={{ listStyleType: "square" }}>
          <li>Preparing VAT documents</li>
          <li>Preparing Income Tax documents</li>
          <li>BIN Registration</li>
          <li>TIN Registration</li>
          <li>
            Providing legal expertise, advice and guidance to a broad range of
            customers
          </li>
          <li>
            Interviewing clients by telephone or face-to-face, to address their
            issues
          </li>
          <li>Addressing audit quarries at the time of audit</li>
          <li>Negotiating legal clauses on behalf of the client</li>
        </ul>
      </section>
      <br />
      <address>
        <p>
          Head Office: 50/1 (5th Floor), Purana palton Line, Dhaka -1000
          <br />
          Savar office: 98/4 Modhaya Rajasion, Savar, Dhaka – 1340
          <br />
          Ashulia office: Opening soon
          <br />
        </p>
      </address>
      <br />
      <section>
        <p>
          <strong>Valued clients:</strong>
        </p>
        <ol type="I">
          <li>
            Import-Export firms-
            <ul>
              <li>Piniti International Bag Factory ( Max)</li>
              <li>SKRP Trade syndicate (SKRP Group)</li>
            </ul>
          </li>
          <li>
            Manufacturing companies-
            <ul>
              <li>AC World Group</li>
              <li>Benham Pharmaceutical Pvt. Ltd.</li>
              <li>Pallmall Industries Pvt. Ltd</li>
              <li>Mycell Technology Ltd.</li>
              <li>Alpha Sports Gear BD Ltd.</li>
              <li>ASK Cables Ltd</li>
            </ul>
          </li>
          <li>
            Service Provider-
            <ul>
              <li>Super Sign Publicity Pvt. Ltd . (Ad. firm)</li>
              <li>Pusty Dairy Farm Sweets & Bakery</li>
            </ul>
          </li>
          <li>
            Dealers/Traders-
            <ul>
              <li>Legend Automobiles Pvt. Ltd ( Motor cycle)</li>
              <li>Nahar Enterprise (Motor cycle)</li>
            </ul>
          </li>
        </ol>
      </section>
    </main>
  );
};

export default Home;
