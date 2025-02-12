import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = () => {

    const getStarted = () => {
        window.scrollTo({
            top: 700,
            behavior: 'smooth'
        });
    }
    return (
    <>
    <Header/>
    <main class="main" id="main">
      <section class="section hero" style={{backgroundImage:'url("/bg-image.png")'}}>
        <h1 class="hero__title">
          Explore the World <br />
          just one Click
        </h1>

        <button onClick={getStarted} class="button button-hero">Get Started</button>
      </section>

      <section class="section tour container">
        <h3 class="section-title">Popular Tour</h3>

        <div class="tour__container">
          <div class="tour__card">
            <img src="/new_york.jpg" alt="" class="tour__card-img" />
            <div class="tour__data">
              <h5 class="tour__data-title">New York City</h5>
              <span class="tour__data-subtitle">USA</span>
            </div>
          </div>
          <div class="tour__card">
            <img src="/img-2.jpg" alt="" class="tour__card-img" />
            <div class="tour__data">
              <h5 class="tour__data-title">Eiffel Tower</h5>
              <span class="tour__data-subtitle">Paris</span>
            </div>
          </div>
          <div class="tour__card">
            <img src="/img-3.jpg" alt="" class="tour__card-img" />
            <div class="tour__data">
              <h5 class="tour__data-title">Colosseum</h5>
              <span class="tour__data-subtitle">Rome</span>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer/>
    </>
    );
};

export default Home;