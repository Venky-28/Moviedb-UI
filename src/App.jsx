import Section from "./Layouts/NavBar/Section";
import Header from "./components/Header";
import MovieList from "./components/Movies/MovieList";

function App (){

    const handleToggleValue = (selectedValue) => {
        console.log(selectedValue)
    }

    return <>
    <Header />
    <Section title="What's Popular" items={["On Tv", "In Theatres"]} onToggle={handleToggleValue} ></Section>
    <MovieList />
    <Section title="Trending" items={["Today", "In Theatres"]} onToggle={handleToggleValue} ></Section>
    <MovieList />
    </>
}

export default App;