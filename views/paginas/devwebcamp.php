<main class="devwebcamp">
    <h2 class="devwebcamp__heading"><?php echo $titulo; ?></h2>
    <p class="devwebcamp__descripcion">Conoce la conferencia más importante de latinoamérica</p>

    <div class="devwebcamp__grid">
        <div data-aos-once="true" <?php aos_animation(); ?> class="devwebcamp__imagen">
            <picture>
                <source srcset="build/img/sobre_devwebcamp.avif" type="image/avif">
                <source srcset="build/img/sobre_devwebcamp.webp" type="image/webp">
                <img loading="lazy" width="200" height="300" src="build/img/sobre_devwebcamp.jpg" alt="Imagen DevWebCamp">
            </picture>
        </div>

        <div class="devwebcamp__contenido">
            <p data-aos-once="true" <?php aos_animation(); ?> class="devwebcamp__text">Duis in turpis consequat, tristique nisl in, dapibus enim. Suspendisse gravida lacus purus, vitae bibendum neque pulvinar non. Aenean elementum rhoncus imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elementum ante mi, in euismod eros volutpat eu.</p>
            <p data-aos-once="true" <?php aos_animation(); ?> class="devwebcamp__text">Suspendisse potenti. Cras leo nisi, ultricies ullamcorper dapibus in, fringilla vel nunc. Morbi vitae enim sollicitudin, aliquet nisi ut, sollicitudin neque. Proin sed porttitor velit, eu ultrices ante. Nullam sed malesuada ex. Etiam ullamcorper ipsum non mauris facilisis, ut auctor nisl posuere. Donec at arcu vitae nisl tempus tincidunt a a libero.</p>
        </div>
    </div>
</main>