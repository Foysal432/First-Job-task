const Whouse = () => {
    return (
        <div className="bg-gradient-to-r from-fuchsia-300 to-violet-400 py-10">
            <p className="text-center text-2xl font-bold my-4  "> Who Can Get benifits From Here </p>
            <div className="grid lg:grid-cols-3 gap-5 max-w-5xl mx-auto my-10">
                {/* cart 1 */}
                <div className="card bg-base-100 shadow-xl">
                    <figure><img className="w-1/2" src="https://i.ibb.co/x8bnwCx/solutions-overview-1-2x.png" alt="student" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-center">corporate professionals</h2>
                        <p>Our Platform Provide a great Opurtunity to make And it is Also helpful for Students </p>
                    </div>
                </div>
                {/* cart 2 */}
                <div className="card  bg-base-100 shadow-xl">
                    <figure><img className="w-1/2" src="https://i.ibb.co/cTmth4n/images-4.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-center">Bankers</h2>
                        <p>Our Platform also provide and it is also helpful for mange Bankers and it is helpful</p>
                    </div>
                </div>
                {/* cart 3 */}
                <div className="card  bg-base-100 shadow-xl">
                    <figure><img className="w-1/2" src="https://i.ibb.co/drg1jn9/images-2.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-center">Developers</h2>
                        <p>If you A developer You also get help from Your platform and it is very helpful</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Whouse;