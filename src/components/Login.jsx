import './Login.css'
import Button from './Button';

export default function Login() {

    function writeName(name) {
        console.log(name);
    }

    return (
        <>
            <form>
                <h2>Login</h2>
                <div className="control-row">
                    <div className="control no-margin">
                        <label htmlFor="email">Email</label>
                        <input
                        />
                    </div>

                    <div className="control no-margin">
                        <label htmlFor="password">Password</label>
                        <input
                            id="password" type="password" name="password" />
                    </div>

                </div>

                <p className="form-actions">
                    <button onClick={() => writeName('tiago')} className="button" type='submit'>Login</button>
                </p>
            </form>
            <Button handleClick={() => writeName('tiago')}>Login</Button>
        </>
    );
}