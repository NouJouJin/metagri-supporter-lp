document.addEventListener('DOMContentLoaded', () => {

    // --- 1. スクロールに応じたフェードインアニメーション ---
    const fadeInTargets = document.querySelectorAll('.fade-in');
    const fadeInObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        rootMargin: '0px',
        threshold: 0.1
    });
    fadeInTargets.forEach(target => {
        fadeInObserver.observe(target);
    });


    // --- 2. スムーズスクロール機能 ---
    const smoothScrollLinks = document.querySelectorAll('.smooth-scroll');
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.hash;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80; // ヘッダーの高さを考慮
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });


    // --- 3. 追従ヘッダーの表示/非表示制御 ---
    const stickyHeader = document.getElementById('sticky-header');
    if (stickyHeader) {
        // ヒーローセクションの高さを取得
        const heroSection = document.querySelector('.hero');
        const triggerHeight = heroSection ? heroSection.offsetHeight : 300;

        window.addEventListener('scroll', () => {
            if (window.scrollY > triggerHeight) {
                stickyHeader.classList.add('is-visible');
            } else {
                stickyHeader.classList.remove('is-visible');
            }
        });
    }


    // --- 4. インタラクティブなホバーエフェクト（CSSで実装済み）---
    // JavaScriptでの追加処理は不要ですが、より複雑なアニメーションを追加する場合はここに記述します。
    // 例：マウス追従エフェクトなど
    // 今回はCSSの :hover で十分なため、ここでは記述しません。
    console.log('Metagri研究所 サポータープランへようこそ！');

});