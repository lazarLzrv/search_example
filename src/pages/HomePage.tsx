import Container from "../components/Grid/Container";
import Title from "../components/Title";
import SearchBar from "../components/SearchBar";

const HomePage = () => {
    return (
        <>
            <Container size='sm'>
                <Title text='search X' />
                <SearchBar />
            </Container>
        </>
    );
};

export default HomePage;
