<template>
    <div>
        <Navbar ref="navbar" />
        <b-container>
            <CategoryContent ref="content" :category="categoryName" />
            <ContactSubscribe />
        </b-container>
        <FooterSection />
    </div>
</template>

<script>
import { ref, onMounted, nextTick } from 'vue';
import CategoryContent from '../components/Category/CategoryContent.vue';
import Navbar from '../components/Navbar.vue';
import ContactSubscribe from '../components/ContactSubscribe.vue';
import FooterSection from '../components/FooterSection.vue';

export default {
    name: 'Category',
    components: {
        Navbar,
        CategoryContent,
        ContactSubscribe,
        FooterSection
    },
    props: {
        name: {
            type: String,
            required: true,
            validator(value) {
                const validNames = [
                    'home',
                    'Business',
                    'Politics',
                    'Environment',
                    'World',
                    'Technology',
                    'Sports',
                    'Health',
                    'Entertainment',
                    'Lifestyle'
                ];
                return validNames.includes(value);
            }
        }
    },
    computed: {
        categoryName() {
            return this.$route.params.name;
        }
    },
    setup() {
        const navbar = ref(null);
        const content = ref(null);

        onMounted(async () => {
            await nextTick();

            if (navbar.value && content.value) {
                const navbarHeight = navbar.value.$el.offsetHeight;
                content.value.$el.style.marginTop = `${navbarHeight}px`;
            }
        });

        return {
            navbar,
            content
        };
    }
};
</script>
