<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
useHead({
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Course",
        name: "Курс .NET Fullstack разработчик",
        description:
          "Практический курс по .NET fullstack разработке. 100+ видеоуроков, ASP.NET Core, React, Docker, микросервисы. Поддержка ментора до оффера.",
        provider: {
          "@type": "Person",
          name: "Кирилл Сачков",
          url: "https://sachkov-dotnet.ru",
        },
        offers: {
          "@type": "Offer",
          category: "Paid",
          priceCurrency: "RUB",
          price: "112000",
          url: "https://sachkov-dotnet.ru",
        },
        hasCourseInstance: {
          "@type": "CourseInstance",
          courseMode: "online",
          courseWorkload: "P4M",
        },
      }),
    },
  ],
});
</script>
