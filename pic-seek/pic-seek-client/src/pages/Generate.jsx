
const Generate = () => {
    return (
        <div className="w-11/12 mx-auto">
            <h2 className="text-3xl text-center">Generate Image</h2>
            <form>

                <fieldset className="form-control w-80">
                    <label className="label">
                        <span className="label-text">Enter your email address</span>
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