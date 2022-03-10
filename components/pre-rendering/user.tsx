function User({ user }: { user: { [key: string]: any}}) {
    return (
        <>
            <li>name - { user.name }</li>
        </>
    );
}

export default User;