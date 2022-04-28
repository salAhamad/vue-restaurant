<template>
    <div class="welcome-text text-center py-2">
        <h4>
            <strong>Hello {{user}}</strong>,
            {{ welcomeText }}
        </h4>
    </div>
</template>
<script>
export default {
    name: 'WelcomeMessage',
    props: [ 'user', 'welcomeText' ]
}
</script>