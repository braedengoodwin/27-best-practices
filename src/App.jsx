import Accordion from "./components/Accordion/Accordion";
import AccordionItem from "./components/Accordion/AccordionItem";

function App() {
  return (
    <main>
      <section>
        <h2>Why work with us</h2>
        <Accordion className="accordion">
          <AccordionItem className='accordion-item' title="We got 20 years of experience">
            <article>
              <p>You can&apos;t go wrong with us</p>
              <p>We are in the business of planning </p>
            </article>
          </AccordionItem>
          <AccordionItem className='accordion-item' title="We're working with local guids">
            <article>
              <p>We are not doing this alone from our office.</p>
              <p>
                Instead, we are working with local guides to ensure a safe
                vacay.{" "}
              </p>
            </article>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
}

export default App;
