import "./FruitForm.css"
// eslint-disable-next-line react/prop-types
function FruitForm({ formState, handleChange, handleSubmit}) {
    return (
        <form onSubmit={handleSubmit}>
            <fieldset className="gegevens-box">
                <legend><strong>Gegevens</strong></legend>
                <label htmlFor="first-name">Voornaam: </label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formState.firstName}
                    placeholder="Typ hier je voornaam in"
                    onChange={handleChange}
                />
                <label htmlFor="last-name">Achternaam: </label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formState.lastName}
                    placeholder="Typ hier je naam in"
                    onChange={handleChange}
                />
                <label htmlFor="leeftijd">Leeftijd: </label>
                <input

                    id="age"
                    name="age"
                    value={formState.age < 0 ? formState.age = 0 : formState.age}
                    placeholder="0"
                    onChange={handleChange}
                />
                <label htmlFor="postcode">Postcode: </label>
                <input
                    type="text"
                    id="postcode"
                    name="postcode"
                    value={formState.postcode.length > 6 ? formState.postcode = "" : formState.postcode}
                    placeholder="1234AB"
                    onChange={handleChange}
                />
            </fieldset>

            <h3>Bezorgfrequentie</h3>

            <select
                id="deliveryFrequency"
                name="deliveryFrequency"
                value={formState.deliveryFrequency}
                onChange={handleChange}
            >
                <option value="iedere week">Iedere week</option>
                <option value="om de week">Om de week</option>
                <option value="iedere maand">Iedere maand</option>
            </select>

            <h3>Bezorgtijd</h3>

            <input
                type="radio"
                id="deliveryTimeOverdag"
                name="deliveryTime"
                value="overdag"
                checked={formState.deliveryTime === "overdag"}
                onChange={handleChange}
            />
            <label>Overdag</label>

            <input
                type="radio"
                id="deliveryTimeAvonds"
                name="deliveryTime"
                value="'s avonds"
                checked={formState.deliveryTime === "'s avonds"}
                onChange={handleChange}
            />
            <label>'s Avonds</label>
            <br />
            <br />
            <label>Opmerking</label>
            <br />
            <textarea
                name="remarks"
                id="remarks"
                rows="5"
                cols="45"
                placeholder="Laat hier je opmerkingen achter"
                value={formState.remarks}
                onChange={handleChange}
            ></textarea>
            <br />
            <input
                type="checkbox"
                id="agreeTermsAndConditions"
                name="agreeTermsAndConditions"
                checked={formState.agreeTermsAndConditions}
                onChange={handleChange}
            />
            <label>Ik ga akkoord met de voorwaarden</label>
            <br />
            <br />
            <input
                type="submit"
                value="Verzenden"
            />
        </form>
    );
}
export default FruitForm