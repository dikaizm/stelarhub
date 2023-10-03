export default function TestimonialSection() {
  return (
    <section className="s-testimoni">
      <div className="container">
        <div className="flex">

          <img src="assets/testimonial-01.png" alt="" />

          <div className="content-w">
            {/* <svg>
          <use xlink:href="#icon-quote"></use>
        </svg> */}
            <p className="quote">I
              really
              enjoyed working with you guys, you guys are very
              communicative and quick to do
              the job. I really can't wait to work with you again!</p>
            <div className="profile-w">
              <img
                src="https://images.unsplash.com/photo-1584611139207-9cf4fed64188?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                alt="" />
              <div className="name-w">
                <p className="name">Stefani Mila</p>
                <p className="position">CEO, Brainware</p>
              </div>
            </div>
          </div>

          <div className="slider">
            <svg viewBox="0 0 8 8" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <circle cx="4" cy="4" r="4" />
            </svg>
            <svg viewBox="0 0 8 8" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <circle cx="4" cy="4" r="4" />
            </svg>
            <svg viewBox="0 0 8 8" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <circle cx="4" cy="4" r="4" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
