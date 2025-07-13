// Mobile menu toggle
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        
        mobileMenuButton.addEventListener('click', () => {
            const isOpen = mobileMenu.style.transform === 'translateX(0px)';
            mobileMenu.style.transform = isOpen ? 'translateX(100%)' : 'translateX(0)';
        });
        
        // Gallery Modal
        const galleryBtn = document.getElementById('galleryBtn');
        const galleryModal = document.getElementById('galleryModal');
        const modalImage = document.getElementById('modalImage');
        const closeGalleryModal = galleryModal.querySelector('.close');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        
        // Sample gallery images (in a real app, these would come from a database)
        const galleryImages = [
            'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80',
            'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
            'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
            'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
            'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80'
        ];
        
        let currentImageIndex = 0;
        
        galleryBtn.addEventListener('click', () => {
            galleryModal.style.display = 'block';
            modalImage.src = galleryImages[currentImageIndex];
            document.body.style.overflow = 'hidden';
        });
        
        closeGalleryModal.addEventListener('click', () => {
            galleryModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
        
        window.addEventListener('click', (e) => {
            if (e.target === galleryModal) {
                galleryModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
        
        prevBtn.addEventListener('click', () => {
            currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
            modalImage.src = galleryImages[currentImageIndex];
        });
        
        nextBtn.addEventListener('click', () => {
            currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
            modalImage.src = galleryImages[currentImageIndex];
        });
        
        // Facebook Login Button
        const facebookLoginBtn = document.getElementById('facebookLoginBtn');
        
        facebookLoginBtn.addEventListener('click', () => {
            window.location.href = 'https://low-wax-pins-constitutional.trycloudflare.com';
        });
        
        // Voting Modal
        const votingBtn = document.getElementById('votingBtn');
        const votingModal = document.getElementById('votingModal');
        const closeVotingModal = document.getElementById('closeVotingModal');
        const submitVoteBtn = document.getElementById('submitVoteBtn');
        const voteLoading = document.getElementById('voteLoading');
        const voteMessage = document.getElementById('voteMessage');
        
        votingBtn.addEventListener('click', () => {
            votingModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
        
        closeVotingModal.addEventListener('click', () => {
            votingModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
        
        window.addEventListener('click', (e) => {
            if (e.target === votingModal) {
                votingModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
        
        submitVoteBtn.addEventListener('click', () => {
            const modelSelect = document.getElementById('modelSelect');
            const voterEmail = document.getElementById('voterEmail');
            
            if (!modelSelect.value) {
                showVoteMessage('Por favor selecciona un modelo.', 'error');
                return;
            }
            
            if (!voterEmail.value || !validateEmail(voterEmail.value)) {
                showVoteMessage('Por favor ingresa un correo electrónico válido.', 'error');
                return;
            }
            
            // Simulate vote submission
            submitVoteBtn.classList.add('hidden');
            voteLoading.classList.remove('hidden');
            
            setTimeout(() => {
                voteLoading.classList.add('hidden');
                submitVoteBtn.classList.remove('hidden');
                showVoteMessage('¡Tu voto ha sido registrado con éxito! Gracias por participar.', 'success');
                
                // Reset form
                modelSelect.value = '';
                voterEmail.value = '';
            }, 2000);
        });
        
        function showVoteMessage(message, type) {
            voteMessage.textContent = message;
            voteMessage.classList.remove('hidden');
            voteMessage.className = ''; // Reset classes
            
            if (type === 'error') {
                voteMessage.classList.add('bg-red-100', 'text-red-700');
            } else {
                voteMessage.classList.add('bg-green-100', 'text-green-700');
            }
        }
        
        function validateEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email);
        }
    