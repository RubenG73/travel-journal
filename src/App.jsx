import './App.css'
import Travel from './components/Travel'
import Header from './components/Header'
import data from './data'

const travelData = data.map(data => {
    return <Travel 
                key = {data.id}
                data = {data}/>
})

console.log(travelData)


function App() {
    return (
        <div className='app-container'>
            <Header />
            {travelData}
        </div>
    )
}

export default App
