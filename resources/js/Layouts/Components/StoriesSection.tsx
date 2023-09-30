export default function StoriesSection({ posts }) {
    return (
        <section className='collection'>
            {/* Section title */}
            <div className='container section-title-wrapper'>
                <div className='flex-col'>
                    <h2 className='section-title'>Machine Learning</h2>
                    <span className='section-desc'>{categoryDesc.MLG}</span>
                </div>
                <div className="btn-wrapper">
                    <a href="#" className="btn btn-primary">VIEW MORE
                    </a>
                </div>
            </div>

            {/* Section content */}

            <div className="container section-content-wrapper">
                <div className='carousel'>
                    {postsByCategory.machine_learning.length > 0 && postsByCategory.machine_learning.map((post) => {
                        return (
                            <CardPost data={post} key={post.id} />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}