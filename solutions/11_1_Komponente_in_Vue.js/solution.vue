

<!-- <script type="module">
export default {
    new Vue({
        el: '#app',
        data: {
            count: 0,
            spaces: 0,
            words: 0
        },
        methods: {
            countings: function () {
                this.count = document.getElementById('text').value.length;
                if (document.getElementById('text').value.match(/\S+/g) !== null)
                    this.words = document.getElementById('text').value.match(/\S+/g).length;
                else
                    this.words = 0;

                if (document.getElementById('text').value.match(/\s/g) !== null)
                    this.spaces = document.getElementById('text').value.match(/\s/g).length;
                else
                    this.spaces = 0;

            },
        }
    });
}
</script>

<template>
    <p class="greeting">{{ greeting }}</p>
</template> -->

<template>
    <h1>{{ greeting }}</h1>
    </template>
    
    <script>
    export default {
        name: 'SkeletonComponent',
        data: function() {
            return {
                greeting: 'Hello'
            };
        },
        props: [],
        methods: {
        },
        created: function(){
        }
    }
    </script>
    
    <style scoped>
    h1 {
        font-size: 2em;
        text-align: center;
    }
    </style>