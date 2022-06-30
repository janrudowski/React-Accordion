import AccordionSection from './components/AccordionSection';
import settingsIcon from './icons/settings.svg';
import squaresIcon from './icons/four-squares.svg';
function App() {
  return (
    <div className='accordion'>
      <AccordionSection
        icon={settingsIcon}
        title='Lorem Ipsum'
        content='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima non ipsa voluptates. Inventore aliquam facere eligendi? Magni veniam earum dicta impedit nisi a possimus, consectetur praesentium perferendis quos animi ad unde quam ipsa, ducimus similique tempora explicabo nulla laudantium, eaque fugit ipsum. Rerum soluta odio praesentium nulla veritatis eaque totam?'
      />
      <AccordionSection
        icon={squaresIcon}
        title='Lorem Ipsum'
        content='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, porro corrupti. Sint cumque tempora minima optio reiciendis sunt. Libero, animi.'
      />
      <AccordionSection
        icon={squaresIcon}
        title='Lorem Ipsum'
        content='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi'
      />
    </div>
  );
}

export default App;
