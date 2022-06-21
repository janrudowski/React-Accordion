import AccordionSection from './components/AccordionSection';
import settingsIcon from './icons/settings.svg';
import squaresIcon from './icons/four-squares.svg';
function App() {
  return (
    <div className='accordion'>
      <AccordionSection
        icon={settingsIcon}
        title='Sort Home By Featured Posts'
        content='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, porro corrupti. Sint cumque tempora minima optio reiciendis sunt. Libero, animi.'
      />
      <AccordionSection
        icon={squaresIcon}
        title='More Things to Do'
        content='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, porro corrupti. Sint cumque tempora minima optio reiciendis sunt. Libero, animi.'
      />
    </div>
  );
}

export default App;
