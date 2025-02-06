
const Generate = () => {
    return (
        <div className="w-11/12 mx-auto">
            <h2 className="text-3xl text-center">Generate Image</h2>
            <form className="flex justify-center items-center my-8">

                <fieldset className="form-control w-80">
                    <label className="label">

                    </label>
                    <div className="join">
                        <input
                            type="text"
                            placeholder="username@site.com"
                            className="input input-bordered join-item" />
                        <button className="btn btn-primary join-item">Subscribe</button>
                    </div>
                </fieldset>
            </form>
        </div>
    );
};

export default Generate;