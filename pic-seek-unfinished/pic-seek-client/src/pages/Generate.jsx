
const Generate = () => {
    const handleSubmit = e => {
        e.preventDefault();
        const prompt = e.target.prompt.value;
        console.log(prompt);
        const form = new FormData()
        form.append('prompt', prompt)
        fetch('https://clipdrop-api.co/text-to-image/v1', {
            method: 'POST',
            headers: {
                'x-api-key': import.meta.env.VITE_CD_KEY,
            },
            body: form,
        })
            .then(response => response.arrayBuffer())
            .then(buffer => {
                // buffer here is a binary representation of the returned image
                console.log(buffer);
                const blob = new Blob([buffer], { type: 'image/png' });
                const url = URL.createObjectURL(blob);
                console.log(url);
            })
    }

    return (
        <div className="w-11/12 mx-auto">
            <h2 className="text-3xl text-center">Generate Image</h2>
            <form onSubmit={handleSubmit} className="flex justify-center items-center my-8">

                <fieldset className="form-control w-80">
                    <label className="label">

                    </label>
                    <div className="join">
                        <input
                            name="prompt"
                            type="text"
                            placeholder="username@site.com"
                            className="input input-bordered join-item" />
                        <button className="btn btn-primary join-item">Generate</button>
                    </div>
                </fieldset>
            </form>
        </div>
    );
};

export default Generate;