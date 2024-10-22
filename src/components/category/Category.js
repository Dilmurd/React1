import "./Category.css"

function Category(){
    return(
        <main>
            <section className="category">
                <div className="container">
                    <div className="category__wrapper">
                        <div className="category__card">
                            <p>Nature</p>
                        </div>
                        <div className="category__card">
                            <p>Photography</p>
                        </div>
                        <div className="category__card">
                            <p>Relaxation</p>
                        </div>
                        <div className="category__card">
                            <p>Vacation</p>
                        </div>
                        <div className="category__card">
                            <p>Travel</p>
                        </div>
                        <div className="category__card">
                            <p>Adventure</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
export default Category