

function Admin() {

    const Logout = async () => {
        localStorage.clear();
        window.location.href = "/";
    }
    return (
        <div className="login-wrapper">
            <h1>Welcome to Admin</h1>
            <button onClick={Logout}>Logout</button>
        </div>

    )
}

export default Admin;
