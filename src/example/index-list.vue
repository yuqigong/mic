<template>
    <div class="miui-wrapper">
        <index-list :sections='names'></index-list>
    </div>
</template>
<script lang="babel">
import {
    IndexList,
    Group,
    Cell
} from '../components/index.js';

export default {
    components: {
        Group,
        Cell,
        IndexList
    },
    data() {
        return {
        names: ['Aaron', 'Alden', 'Austin', 'Baldwin', 'Braden', 'Carl', 'Chandler', 'Clyde', 'David', 'Edgar', 'Elton', 'Floyd', 'Freeman', 'Gavin', 'Hector', 'Henry', 'Ian', 'Jason', 'Joshua', 'Kane', 'Lambert', 'Matthew', 'Morgan', 'Neville', 'Oliver', 'Oscar', 'Perry', 'Quinn', 'Ramsey', 'Scott', 'Seth', 'Spencer', 'Timothy', 'Todd', 'Trevor', 'Udolf', 'Victor', 'Vincent', 'Walton', 'Willis', 'Xavier', 'Yvonne', 'Zack', 'Zane']
        };
    }
};
</script>
