<template>
    <header>
        <ul>
            <li>
                <nuxt-link to='/'>Home</nuxt-link>
            </li>
            <li>
                <nuxt-link to='/users'>Users</nuxt-link>
            </li>
        </ul>
    </header>
</template>

<style scoped>
header{
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ccc;
}
ul{
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 80%;
}

a {
    text-decoration: none;
    color: black;
}
a:hover,
a:active{
    color: white;
}
</style>