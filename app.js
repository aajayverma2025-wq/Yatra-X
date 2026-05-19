// --- MOCK DATABASE DATA (Initialized in LocalStorage) ---
const DEFAULT_TREKS = [
    { 
        id: 1, 
        name: 'Sanga Lamatar', 
        price: 120, 
        duration: '1 Day', 
        difficulty: 'Easy',
        leader: 'Sundar Gurung',
        date: '2026-05-24',
        status: 'Upcoming',
        participants: 'Sophia (F), Elena (F)',
        photos: [
            'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=600'
        ]
    },
    { 
        id: 2, 
        name: 'Lamatar Godawari', 
        price: 140, 
        duration: '1 Day', 
        difficulty: 'Easy',
        leader: 'Pasang Sherpa',
        date: '2026-05-25',
        status: 'Upcoming',
        participants: 'Carlos (M), Rohan (M)',
        photos: [
            'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=600'
        ]
    },
    { 
        id: 3, 
        name: 'Godawari Circuit', 
        price: 180, 
        duration: '1 Day', 
        difficulty: 'Medium',
        leader: 'Sundar Gurung',
        date: '2026-05-30',
        status: 'Upcoming',
        participants: 'Elena (F), Carlos (M), Rohan (M)',
        photos: [
            'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=600'
        ]
    },
    { 
        id: 4, 
        name: 'Godawari Phulchoki', 
        price: 199, 
        duration: '1 Day', 
        difficulty: 'Medium',
        leader: 'Pasang Sherpa',
        date: '2026-06-01',
        status: 'Upcoming',
        participants: 'Elena (F), Carlos (M)',
        photos: [
            'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=600'
        ]
    },
    { 
        id: 5, 
        name: 'Godawari Takhel', 
        price: 150, 
        duration: '1 Day', 
        difficulty: 'Easy',
        leader: 'Sundar Gurung',
        date: '2026-06-05',
        status: 'Completed',
        participants: 'John (M), Sarah (F)',
        photos: []
    },
    { 
        id: 6, 
        name: 'Lower Pharping', 
        price: 99, 
        duration: '1 Day', 
        difficulty: 'Easy',
        leader: 'Pasang Sherpa',
        date: '2026-06-08',
        status: 'Completed',
        participants: 'Rohan (M)',
        photos: []
    },
    { 
        id: 7, 
        name: 'Singla Mane', 
        price: 299, 
        duration: '2 Days', 
        difficulty: 'Medium',
        leader: 'Sundar Gurung',
        date: '2026-06-12',
        status: 'Completed',
        participants: 'Carlos (M), Sophia (F)',
        photos: []
    },
    { 
        id: 8, 
        name: 'Pikey Peak', 
        price: 899, 
        duration: '5 Days', 
        difficulty: 'Hard',
        leader: 'Pasang Sherpa',
        date: '2026-06-20',
        status: 'Upcoming',
        participants: 'Emma (F), Carlos (M), Rohan (M)',
        photos: [
            'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=600'
        ]
    },
    { 
        id: 9, 
        name: 'Nagthali Rasuwa', 
        price: 650, 
        duration: '4 Days', 
        difficulty: 'Medium',
        leader: 'Sundar Gurung',
        date: '2026-06-28',
        status: 'Upcoming',
        participants: 'Gauri (F), Amit (M)',
        photos: []
    },
    { 
        id: 10, 
        name: 'Deudhunga Dolakha', 
        price: 799, 
        duration: '6 Days', 
        difficulty: 'Hard',
        leader: 'Pasang Sherpa',
        date: '2026-07-05',
        status: 'Completed',
        participants: 'Karma (M), Elena (F)',
        photos: []
    }
];

const DEFAULT_BOOKINGS = [
    { id: 101, trekName: 'Sanga Lamatar', clientName: 'Kaushal Verma', date: '2026-05-24', pax: 2, amount: 240, status: 'Approved', paymentScreenshot: '', txNotes: 'Verified cash deposit', groupNames: [] },
    { id: 102, trekName: 'Godawari Circuit', clientName: 'Sophia Lin', date: '2026-05-30', pax: 1, amount: 180, status: 'Pending', paymentScreenshot: '', txNotes: '', groupNames: [] },
    { id: 103, trekName: 'Pikey Peak', clientName: 'Carlos Santis', date: '2026-06-20', pax: 4, amount: 3596, status: 'Approved', paymentScreenshot: '', txNotes: 'Wire transfer', groupNames: [] }
];

const DEFAULT_SATURDAY_HIKES = [
    {
        id: 1,
        destination: 'Shivapuri Peak Subscription',
        price: 25,
        date: 'Next Saturday',
        leader: 'Sundar',
        difficulty: 'Medium',
        status: 'Upcoming',
        participants: 'John (M), Emily (F)'
    },
    {
        id: 2,
        destination: 'Champadevi Trail Hike',
        price: 20,
        date: 'Last Saturday',
        leader: 'Pasang',
        difficulty: 'Easy',
        status: 'Completed',
        participants: 'Sophia (F), Carlos (M), Elena (F)'
    }
];

const DEFAULT_SATURDAY_BOOKINGS = [
    {
        id: 1,
        subscriberName: 'John',
        targetHike: 'Shivapuri Peak Subscription',
        contact: 'john@example.com',
        status: 'Approved',
        receipt: ''
    }
];

const DEFAULT_SATURDAY_PAGE_BLOCKS = [
    {
        id: 1,
        photo: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=600',
        text: '<h3>Steps to Confirm Participation:</h3>\n<p>1. Send your Form <a href="#">https://www.walknepalwalk.com.np/participation-form</a><br>2. Make payment to: <a href="#">https://www.walknepalwalk.com.np/payment-info</a><br>3. Send <b>payment voucher via WhatsApp</b><br>4. Your number shall be added to WhatsApp group for more accurate Group coordination.</p>\n<br>\n<h3>Participation Eligibility:</h3>\n<ul><li>Participants should have a reasonable level of fitness to complete the hike within the designated timeframe.</li><li>Age requirement: 13 to 50 years. (outside age range allowed with friend or guardian)</li></ul>'
    }
];

const DEFAULT_COSTS = [
    { id: 201, category: 'Permits', description: 'National Park entry permits & log fees', amount: 350 },
    { id: 202, category: 'Guides', description: 'Pasang Sherpa senior lead salary allocation', amount: 800 },
    { id: 203, category: 'Transport', description: 'Jeep hire for Sanga Lamatar transit', amount: 180 }
];

const DEFAULT_FEEDBACKS = [
    { id: 301, name: 'Kaushal Verma', rating: 5, comment: 'The new design layouts are extremely clean. Our team roster and itineraries map exactly to our photos!', status: 'Approved' },
    { id: 302, name: 'Elena Rostova', rating: 5, comment: 'The outdoor adventure signup flow works flawlessly, and the payment verification receipt makes booking secure.', status: 'Approved' }
];

const DEFAULT_COMMUNITY_LOG = [
    { id: 401, name: 'Velin R.', category: 'Hike', distance: 54, trips: 3, gender: 'Female', age: 28 },
    { id: 402, name: 'Lekin/Bhivan R.', category: 'Hike', distance: 54, trips: 3, gender: 'Male', age: 25 },
    { id: 403, name: 'Sujan K.', category: 'Hike', distance: 54, trips: 2, gender: 'Male', age: 31 },
    { id: 404, name: 'Ninamma R.', category: 'Hike', distance: 54, trips: 3, gender: 'Female', age: 24 },
    { id: 405, name: 'Prashant O.', category: 'Hike', distance: 54, trips: 3, gender: 'Male', age: 29 },
    { id: 406, name: 'Karma G.', category: 'Trek', distance: 68, trips: 2, gender: 'Male', age: 35 },
    { id: 407, name: 'Salina T.', category: 'Hike', distance: 84, trips: 4, gender: 'Female', age: 27 },
    { id: 408, name: 'Amit B.', category: 'Hike', distance: 50, trips: 3, gender: 'Male', age: 30 }
];

const DEFAULT_CONTENT = {
    logoName: 'trekwithkaushal',
    logoIcon: 'mountain',
    logoImg: '', // base64 custom logo image
    heroTitle: 'Immersive Antigravity Mountain Treks',
    heroDesc: 'Experience the majestic heights of the Himalayas through custom expeditions. Floating structural elegance, expert mountain sherpas, and secure payment management systems.',
    heroBtn: 'Book Adventure',
    dashTitle: 'Trek Control Panel',
    stat1Val: '10 Active',
    stat1Lbl: 'Premium Expedition Trails',
    stat2Val: '24 / 7',
    stat2Lbl: 'Mountain Guide Assistance',
    // Social links
    socialInstagram: 'https://instagram.com',
    socialTiktok: 'https://tiktok.com',
    socialFacebook: 'https://facebook.com',
    socialWhatsapp: '9779800000000', // default number
    socialYoutube: 'https://youtube.com',
    // Bank Details & QR
    bankName: 'Nabil Bank Ltd.',
    bankAccount: '0110175003291',
    bankAccountName: 'Trek With Kaushal Pvt. Ltd.',
    qrImg: '', // base64 QR code image
    heroBg: '', // base64 Hero Background Photo
    heroPhotos: [] // base64 Hero Photos Strip
};

// --- INITIALIZE LOCAL STORAGE ---
window.dbCache = {};

function initDB(callback) {
    const request = indexedDB.open("TrekDB", 1);
    
    request.onupgradeneeded = (e) => {
        const db = e.target.result;
        if (!db.objectStoreNames.contains("KeyValueStore")) {
            db.createObjectStore("KeyValueStore");
        }
    };
    
    request.onsuccess = (e) => {
        const db = e.target.result;
        const transaction = db.transaction("KeyValueStore", "readonly");
        const store = transaction.objectStore("KeyValueStore");
        
        const keys = [
            'admin_treks',
            'admin_bookings',
            'admin_costs',
            'admin_feedbacks',
            'admin_content',
            'admin_community_log',
            'admin_password',
            'admin_saturday_hikes',
            'admin_saturday_bookings',
            'admin_saturday_page_blocks'
        ];
        
        let loadedCount = 0;
        
        keys.forEach(key => {
            const getReq = store.get(key);
            getReq.onsuccess = (ev) => {
                let val = ev.target.result;
                
                // If not in IndexedDB, migrate from localStorage
                if (val === undefined) {
                    const localVal = localStorage.getItem(key);
                    if (localVal !== null) {
                        try {
                            val = JSON.parse(localVal);
                        } catch(err) {
                            val = localVal;
                        }
                    } else {
                        // Use default values if neither has it
                        if (key === 'admin_treks') val = DEFAULT_TREKS;
                        else if (key === 'admin_bookings') val = DEFAULT_BOOKINGS;
                        else if (key === 'admin_costs') val = DEFAULT_COSTS;
                        else if (key === 'admin_feedbacks') val = DEFAULT_FEEDBACKS;
                        else if (key === 'admin_content') val = DEFAULT_CONTENT;
                        else if (key === 'admin_community_log') val = DEFAULT_COMMUNITY_LOG;
                        else if (key === 'admin_password') val = 'admin123';
                        else if (key === 'admin_saturday_hikes') val = DEFAULT_SATURDAY_HIKES;
                        else if (key === 'admin_saturday_bookings') val = DEFAULT_SATURDAY_BOOKINGS;
                        else if (key === 'admin_saturday_page_blocks') val = DEFAULT_SATURDAY_PAGE_BLOCKS;
                    }
                    
                    // Write to IndexedDB immediately for next time
                    const writeTx = db.transaction("KeyValueStore", "readwrite");
                    writeTx.objectStore("KeyValueStore").put(val, key);
                }
                
                window.dbCache[key] = val;
                loadedCount++;
                if (loadedCount === keys.length) {
                    if (callback) callback();
                }
            };
            getReq.onerror = () => {
                loadedCount++;
                if (loadedCount === keys.length) {
                    if (callback) callback();
                }
            };
        });
    };
    
    request.onerror = (e) => {
        console.error("IndexedDB failed to open, falling back to localStorage", e);
        const keys = [
            'admin_treks', 'admin_bookings', 'admin_costs', 
            'admin_feedbacks', 'admin_content', 'admin_community_log', 'admin_password', 'admin_saturday_hikes', 'admin_saturday_bookings', 'admin_saturday_page_blocks'
        ];
        keys.forEach(key => {
            const localVal = localStorage.getItem(key);
            if (localVal !== null) {
                try {
                    window.dbCache[key] = JSON.parse(localVal);
                } catch(err) {
                    window.dbCache[key] = localVal;
                }
            } else {
                if (key === 'admin_treks') window.dbCache[key] = DEFAULT_TREKS;
                else if (key === 'admin_bookings') window.dbCache[key] = DEFAULT_BOOKINGS;
                else if (key === 'admin_costs') window.dbCache[key] = DEFAULT_COSTS;
                else if (key === 'admin_feedbacks') window.dbCache[key] = DEFAULT_FEEDBACKS;
                else if (key === 'admin_content') window.dbCache[key] = DEFAULT_CONTENT;
                else if (key === 'admin_community_log') window.dbCache[key] = DEFAULT_COMMUNITY_LOG;
                else if (key === 'admin_password') window.dbCache[key] = 'admin123';
                else if (key === 'admin_saturday_hikes') window.dbCache[key] = DEFAULT_SATURDAY_HIKES;
                else if (key === 'admin_saturday_bookings') window.dbCache[key] = DEFAULT_SATURDAY_BOOKINGS;
                else if (key === 'admin_saturday_page_blocks') window.dbCache[key] = DEFAULT_SATURDAY_PAGE_BLOCKS;
            }
        });
        if (callback) callback();
    };
}

// Helpers
const getData = (key) => {
    const data = window.dbCache[key];
    if (key === 'admin_content' && data) {
        return { ...DEFAULT_CONTENT, ...data };
    }
    if (key === 'admin_treks' && Array.isArray(data)) {
        return data.map(t => ({ ...t, status: t.status || 'Upcoming' }));
    }
    if (key === 'admin_saturday_hikes' && Array.isArray(data)) {
        return data.map(h => ({ ...h, status: h.status || 'Upcoming' }));
    }
    return data;
};

const setData = (key, data) => {
    window.dbCache[key] = data;
    
    // Write asynchronously to IndexedDB in the background
    try {
        const request = indexedDB.open("TrekDB", 1);
        request.onsuccess = (e) => {
            const db = e.target.result;
            const tx = db.transaction("KeyValueStore", "readwrite");
            tx.objectStore("KeyValueStore").put(data, key);
        };
    } catch (e) {
        console.error("IndexedDB async write error:", e);
    }
    
    // Fallback to localStorage (only if within 1MB capacity)
    try {
        const str = JSON.stringify(data);
        if (str.length < 1000000) {
            localStorage.setItem(key, str);
        }
    } catch (e) {
        // Safe to ignore
    }
    return true;
};

const compressImage = (dataUrl, maxWidth, quality, callback) => {
    const img = new Image();
    img.onload = () => {
        let width = img.width;
        let height = img.height;
        if (width > maxWidth) {
            height = Math.round((height * maxWidth) / width);
            width = maxWidth;
        }
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);
        callback(canvas.toDataURL('image/jpeg', quality));
    };
    img.src = dataUrl;
};

// --- STATE MANAGER ---
const state = {
    currentTab: 'dashboard',
    editingCostId: null,
    editingTrekId: null,
    editingMemberId: null,
    uploadedPhotos: [],
    expandedTrekId: null,
    uploadedScreenshotReceipt: '',
    uploadedLogoImg: '',
    uploadedQrImg: '',
    uploadedHeroBg: '',
    uploadedHeroPhotos: [],
    teamMembersCount: 0,
    activeCompressions: 0,
    logoDeleted: false,
    heroBgDeleted: false,
    heroPhotosDeleted: false,
    editingSaturdayBlockId: null,
    uploadedSaturdayBlockPhoto: '',
    // HIKERS COMMUNITY FILTERS & STATE
    hikerPeriod: '30d',
    hikerSort: 'distance',
    hikerLimit: 4,
    trekkerPeriod: '30d',
    trekkerSort: 'distance',
    trekkerLimit: 4,
    journeyPeriod: '30d',
    journeySort: 'distance',
    journeyLimit: 5,
    kmPeriod: 'all',
    dnaPeriod: '30d'
};

// --- APP LAUNCH ---
document.addEventListener('DOMContentLoaded', () => {
    initDB(() => {
        setupAuth();
        setupNavigation();
        setupPublicNavigation();
        setupTrekManagement();
        setupSaturdayHikesManagement();
        setupCommunityLog();
        setupCostManagement();
        setupBookingManagement();
        setupContentManagement();
        setupFeedbackManagement();
        setupSaturdayPageBlocksManagement();
        
        // Custom Signup and Payment Forms Setup
        setupPublicSignupForm();
        setupPublicPaymentForm();
        
        renderAll();
        
        // Launch custom hover popup features
        initHeroPhotoHoverPopup();
    });
});

// --- TOAST NOTIFICATIONS ---
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = '';
    toast.className = `toast ${type}`;
    
    const icon = document.createElement('i');
    icon.className = type === 'success' ? 'fa-solid fa-circle-check' : 'fa-solid fa-triangle-exclamation';
    
    toast.appendChild(icon);
    toast.appendChild(document.createTextNode(` ${message}`));
    
    toast.style.display = 'flex';
    setTimeout(() => {
        toast.style.display = 'none';
    }, 3000);
}

// Check privilege state
const isAdmin = () => sessionStorage.getItem('isAdminLoggedIn') === 'true';

// --- AUTHENTICATION & MODALS ---
function setupAuth() {
    const loginTrigger = document.getElementById('btn-admin-login-trigger');
    const loginModal = document.getElementById('admin-login-modal');
    const closeLoginBtn = document.getElementById('btn-login-close');
    const loginForm = document.getElementById('login-form');
    const passwordInput = document.getElementById('login-password');
    const errorMsg = document.getElementById('error-message');

    if (loginTrigger) {
        loginTrigger.addEventListener('click', () => {
            errorMsg.style.display = 'none';
            passwordInput.value = '';
            loginModal.style.display = 'flex';
            passwordInput.focus();
        });
    }

    if (closeLoginBtn) {
        closeLoginBtn.addEventListener('click', () => {
            loginModal.style.display = 'none';
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target === loginModal) {
            loginModal.style.display = 'none';
        }
    });

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const password = document.getElementById('login-password').value;
            const currentPass = localStorage.getItem('admin_password') || 'admin123';
            if (password === currentPass) {
                sessionStorage.setItem('isAdminLoggedIn', 'true');
                loginModal.style.display = 'none';
                showToast('Welcome back, Administrator!', 'success');
                renderAll();
            } else {
                errorMsg.style.display = 'block';
                passwordInput.value = '';
                passwordInput.focus();
                showToast('Incorrect security passcode', 'danger');
            }
        });
    }

    const logoutBtns = document.querySelectorAll('.logout-btn');
    logoutBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            sessionStorage.removeItem('isAdminLoggedIn');
            state.currentTab = 'dashboard';
            
            document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
            document.querySelector('.nav-item[data-tab="dashboard"]').classList.add('active');
            
            document.querySelectorAll('.tab-panel').forEach(panel => panel.classList.remove('active'));
            document.getElementById('dashboard-panel').classList.add('active');

            showToast('Logged out successfully', 'success');
            renderAll();
        });
    });
}

// --- PUBLIC WEBSITE MENU NAVIGATION ---
function setupPublicNavigation() {
    const menuRoster = document.getElementById('link-menu-roster');
    const menuLeaderboard = document.getElementById('link-menu-leaderboard');
    const menuSaturdayPublic = document.getElementById('link-menu-saturday-public');
    const menuTestimonials = document.getElementById('link-menu-testimonials');
    const btnRegister = document.getElementById('btn-public-register');

    // "More" Dropdown Menu Actions (Image 3)
    const dropSignup = document.getElementById('link-dropdown-signup');
    const dropPayment = document.getElementById('link-dropdown-payment');
    const dropFeedback = document.getElementById('link-dropdown-feedback');
    const dropFaq = document.getElementById('link-dropdown-faq');
    const dropPrep = document.getElementById('link-dropdown-prep');

    const handlePublicTabSwitch = (tabId, clickedElement) => {
        document.querySelectorAll('.public-menu a').forEach(a => a.classList.remove('active'));
        if (clickedElement) clickedElement.classList.add('active');
        
        document.querySelectorAll('.tab-panel').forEach(panel => panel.classList.remove('active'));
        const targetPanel = document.getElementById(`${tabId}-panel`);
        if (targetPanel) {
            targetPanel.classList.add('active');
            
            // If saturday-public is active, also show the signup form below it
            if (tabId === 'saturday-public') {
                const signupPanel = document.getElementById('signup-panel');
                if (signupPanel) signupPanel.classList.add('active');
            }
            
            // Scroll to the content area so the user sees the new tab
            const appContainer = document.getElementById('admin-app');
            if (appContainer) {
                appContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
        
        state.currentTab = tabId;
        renderAll();
    };

    if (menuRoster) {
        menuRoster.addEventListener('click', (e) => {
            e.preventDefault();
            handlePublicTabSwitch('dashboard', menuRoster);
        });
    }

    if (menuLeaderboard) {
        menuLeaderboard.addEventListener('click', (e) => {
            e.preventDefault();
            handlePublicTabSwitch('leaderboard', menuLeaderboard);
        });
    }

    if (menuSaturdayPublic) {
        menuSaturdayPublic.addEventListener('click', (e) => {
            e.preventDefault();
            handlePublicTabSwitch('saturday-public', menuSaturdayPublic);
        });
    }

    if (menuTestimonials) {
        menuTestimonials.addEventListener('click', (e) => {
            e.preventDefault();
            handlePublicTabSwitch('feedback', menuTestimonials);
        });
    }

    if (btnRegister) {
        btnRegister.addEventListener('click', (e) => {
            e.preventDefault();
            handlePublicTabSwitch('signup', null);
            showToast('Outdoor Adventure Signup Form activated!', 'success');
        });
    }

    // Dropdowns
    if (dropSignup) {
        dropSignup.addEventListener('click', (e) => {
            e.preventDefault();
            handlePublicTabSwitch('signup', null);
        });
    }

    if (dropPayment) {
        dropPayment.addEventListener('click', (e) => {
            e.preventDefault();
            handlePublicTabSwitch('payment', null);
        });
    }

    if (dropFeedback) {
        dropFeedback.addEventListener('click', (e) => {
            e.preventDefault();
            handlePublicTabSwitch('feedback', null);
        });
    }

    if (dropFaq) {
        dropFaq.addEventListener('click', (e) => {
            e.preventDefault();
            handlePublicTabSwitch('faq', null);
        });
    }

    if (dropPrep) {
        dropPrep.addEventListener('click', (e) => {
            e.preventDefault();
            handlePublicTabSwitch('prep', null);
        });
    }

    // Hero CTA Buttons
    const heroCTARegister = document.getElementById('hero-cta-register');
    if (heroCTARegister) {
        heroCTARegister.addEventListener('click', (e) => {
            e.preventDefault();
            handlePublicTabSwitch('signup', null);
            showToast('Outdoor Adventure Signup Form activated!', 'success');
        });
    }

    const heroCTAView = document.getElementById('hero-cta-view');
    if (heroCTAView) {
        heroCTAView.addEventListener('click', (e) => {
            e.preventDefault();
            handlePublicTabSwitch('dashboard', menuRoster);
        });
    }
}

// --- SELECT ITINERARY ACTION (IMAGE 1 COLLAPSIBLE ACTIONS) ---
window.selectItinerary = (trekName) => {
    state.currentTab = 'signup';
    document.querySelectorAll('.tab-panel').forEach(panel => panel.classList.remove('active'));
    document.getElementById('signup-panel').classList.add('active');
    
    // Scroll to the content area
    const appContainer = document.getElementById('admin-app');
    if (appContainer) {
        appContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    
    // Setup select elements
    const select = document.getElementById('signup-trek-select');
    if (select) {
        select.value = trekName;
        // Trigger date change update
        const dateSelect = document.getElementById('signup-date-select');
        const treks = getData('admin_treks') || [];
        const trek = treks.find(t => t.name === trekName);
        if (trek && dateSelect) {
            dateSelect.innerHTML = `<option value="${trek.date}">${trek.date}</option>`;
        }
    }
    
    showToast(`Itinerary "${trekName}" selected! Fill out signup details.`, 'success');
    renderAll();
};

// --- ADMIN SIDEBAR NAVIGATION ---
function setupNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    const panels = document.querySelectorAll('.tab-panel');

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const tabId = item.getAttribute('data-tab');

            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');

            panels.forEach(panel => {
                panel.classList.remove('active');
                if (panel.id === `${tabId}-panel`) {
                    panel.classList.add('active');
                }
            });

            state.currentTab = tabId;
            renderAll();
        });
    });
}

// --- DYNAMIC PUBLIC SIGNUP FORM (IMAGE 2, 4, 5) ---
function setupPublicSignupForm() {
    const radioSolo = document.getElementById('radio-solo');
    const radioGroup = document.getElementById('radio-group');
    const wrapper = document.getElementById('team-members-wrapper');
    const list = document.getElementById('team-members-list');
    const addBtn = document.getElementById('btn-add-team-member');
    const signupForm = document.getElementById('public-signup-form');

    if (radioSolo && radioGroup) {
        radioSolo.addEventListener('change', () => {
            wrapper.style.display = 'none';
            list.innerHTML = '';
            state.teamMembersCount = 0;
        });

        radioGroup.addEventListener('change', () => {
            wrapper.style.display = 'block';
            if (list.children.length === 0) {
                addNewTeamMemberRow();
            }
        });
    }

    if (addBtn) {
        addBtn.addEventListener('click', () => {
            addNewTeamMemberRow();
        });
    }

    const addNewTeamMemberRow = () => {
        state.teamMembersCount++;
        const row = document.createElement('div');
        row.className = 'form-row';
        row.style.background = 'var(--bg-light)';
        row.style.padding = '12px';
        row.style.borderRadius = '6px';
        row.style.border = '1px solid var(--border)';
        row.style.alignItems = 'flex-end';
        row.id = `team-member-row-${state.teamMembersCount}`;

        row.innerHTML = `
            <div class="form-group" style="flex: 2;">
                <label>Member Name</label>
                <input type="text" class="form-input member-row-name" placeholder="Member Name" required>
            </div>
            <div class="form-group">
                <label>Age Group</label>
                <select class="form-select member-row-age" required>
                    <option value="18-25">18-25</option>
                    <option value="26-35">26-35</option>
                    <option value="36-50">36-50</option>
                    <option value="50+">50+</option>
                </select>
            </div>
            <div class="form-group">
                <label>Gender</label>
                <select class="form-select member-row-gender" required>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <button type="button" class="btn-danger btn-sm" onclick="removeTeamMemberRow(${state.teamMembersCount})" style="height:38px; margin-bottom:16px; border-radius:4px;"><i class="fa-solid fa-trash-can"></i></button>
        `;
        list.appendChild(row);
    };

    window.removeTeamMemberRow = (id) => {
        const row = document.getElementById(`team-member-row-${id}`);
        if (row) row.remove();
    };

    // Trek and Date selects populator
    const trekSelect = document.getElementById('signup-trek-select');
    const dateSelect = document.getElementById('signup-date-select');

    if (trekSelect) {
        trekSelect.addEventListener('change', (e) => {
            const selectedVal = e.target.value;
            const dateSelect = document.getElementById('signup-date-select');
            
            if (selectedVal.startsWith('SAT_')) {
                const id = parseInt(selectedVal.replace('SAT_', ''));
                const hikes = getData('admin_saturday_hikes') || [];
                const hike = hikes.find(t => t.id === id);
                if (hike && dateSelect) dateSelect.innerHTML = `<option value="${hike.date}">${hike.date}</option>`;
            } else if (selectedVal.startsWith('TREK_')) {
                const id = parseInt(selectedVal.replace('TREK_', ''));
                const treks = getData('admin_treks') || [];
                const trek = treks.find(t => t.id === id);
                if (trek && dateSelect) dateSelect.innerHTML = `<option value="${trek.date}">${trek.date}</option>`;
            }
        });
    }

    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('signup-name').value.trim();
            const phone = document.getElementById('signup-phone').value.trim();
            const email = document.getElementById('signup-email').value.trim();
            const trekSelectVal = document.getElementById('signup-trek-select').value;
            const departureDate = document.getElementById('signup-date-select').value;
            const ageGroup = document.getElementById('signup-age-group').value;
            const gender = document.getElementById('signup-gender').value;

            const isGroup = document.querySelector('input[name="signup-group-mode"]:checked').value === 'Group';

            // Gather team members
            let pax = 1;
            let groupNames = [name + ` (${gender.charAt(0)})`];

            if (isGroup) {
                const namesInputs = document.querySelectorAll('.member-row-name');
                const gendersSelects = document.querySelectorAll('.member-row-gender');
                
                namesInputs.forEach((el, idx) => {
                    const mName = el.value.trim();
                    const mGender = gendersSelects[idx].value;
                    if (mName) {
                        pax++;
                        groupNames.push(`${mName} (${mGender.charAt(0)})`);
                    }
                });
            }

            let trekName = '';
            let isSaturday = false;
            let trekObj = null;
            let price = 150;

            if (trekSelectVal.startsWith('SAT_')) {
                isSaturday = true;
                const id = parseInt(trekSelectVal.replace('SAT_', ''));
                const satHikes = getData('admin_saturday_hikes') || [];
                trekObj = satHikes.find(h => h.id === id);
                if (trekObj) {
                    trekName = trekObj.destination;
                    price = trekObj.price;
                }
            } else if (trekSelectVal.startsWith('TREK_')) {
                const id = parseInt(trekSelectVal.replace('TREK_', ''));
                const treks = getData('admin_treks') || [];
                trekObj = treks.find(t => t.id === id);
                if (trekObj) {
                    trekName = trekObj.name;
                    price = trekObj.price;
                }
            }

            const totalCost = price * pax;

            if (isSaturday) {
                const sBookings = getData('admin_saturday_bookings') || [];
                sBookings.push({
                    id: Date.now(),
                    subscriberName: name,
                    targetHike: trekName,
                    contact: email || phone,
                    status: 'Pending',
                    receipt: '',
                    pax: pax,
                    amount: totalCost,
                    groupNames: groupNames
                });
                setData('admin_saturday_bookings', sBookings);

                if (trekObj) {
                    let existingParticipants = trekObj.participants ? trekObj.participants.trim() : '';
                    const newParticipantsStr = groupNames.join(', ');
                    if (existingParticipants.length > 0) {
                        if (existingParticipants.endsWith(',')) existingParticipants += ' ' + newParticipantsStr;
                        else existingParticipants += ', ' + newParticipantsStr;
                    } else {
                        existingParticipants = newParticipantsStr;
                    }
                    trekObj.participants = existingParticipants;
                    const satHikes = getData('admin_saturday_hikes') || [];
                    const idx = satHikes.findIndex(h => h.id === trekObj.id);
                    if (idx !== -1) {
                        satHikes[idx] = trekObj;
                        setData('admin_saturday_hikes', satHikes);
                    }
                }
            } else {
                const bookings = getData('admin_bookings') || [];
                const newBooking = {
                    id: Date.now(),
                    trekName,
                    clientName: name,
                    phone: phone,
                    email: email,
                    date: departureDate,
                    pax,
                    amount: totalCost,
                    status: 'Pending',
                    paymentScreenshot: '',
                    txNotes: `Primary contact phone: ${phone}, email: ${email}`,
                    groupNames: groupNames
                };
                bookings.push(newBooking);
                setData('admin_bookings', bookings);

                // Dynamically update the trek's Participants List Roster
                if (trekObj) {
                    let existingParticipants = trekObj.participants ? trekObj.participants.trim() : '';
                    const newParticipantsStr = groupNames.join(', ');
                    
                    if (existingParticipants.length > 0) {
                        if (existingParticipants.endsWith(',')) {
                            existingParticipants += ' ' + newParticipantsStr;
                        } else {
                            existingParticipants += ', ' + newParticipantsStr;
                        }
                    } else {
                        existingParticipants = newParticipantsStr;
                    }
                    
                    trekObj.participants = existingParticipants;
                    const treks = getData('admin_treks') || [];
                    const idx = treks.findIndex(t => t.id === trekObj.id);
                    if (idx !== -1) {
                        treks[idx] = trekObj;
                        setData('admin_treks', treks);
                    }
                }
            }

            // Dynamically register hikers inside community logs for leaderboards
            const logs = getData('admin_community_log') || [];
            
            // Primary contact log
            const distanceSeed = trekName.includes('Lamatar') || trekName.includes('Godawari') ? 12 : 54;
            const tripsSeed = 1;
            logs.push({
                id: Date.now() + 1,
                name: name,
                category: trekName.includes('Days') ? 'Trek' : 'Hike',
                distance: distanceSeed,
                trips: tripsSeed,
                gender: gender,
                age: ageGroup === '18-25' ? 22 : ageGroup === '26-35' ? 29 : 42
            });

            if (isGroup) {
                const namesInputs = document.querySelectorAll('.member-row-name');
                const ageSelects = document.querySelectorAll('.member-row-age');
                const genderSelects = document.querySelectorAll('.member-row-gender');
                
                namesInputs.forEach((el, idx) => {
                    const mName = el.value.trim();
                    const mAge = ageSelects[idx].value;
                    const mGender = genderSelects[idx].value;
                    if (mName) {
                        logs.push({
                            id: Date.now() + 2 + idx,
                            name: mName,
                            category: trekName.includes('Days') ? 'Trek' : 'Hike',
                            distance: distanceSeed,
                            trips: tripsSeed,
                            gender: mGender,
                            age: mAge === '18-25' ? 21 : mAge === '26-35' ? 30 : 45
                        });
                    }
                });
            }
            
            setData('admin_community_log', logs);

            // Re-populate select boxes
            populatePublicPaymentSelects();

            // Success Transition
            signupForm.reset();
            populatePublicTrekSelects();
            wrapper.style.display = 'none';
            list.innerHTML = '';
            state.teamMembersCount = 0;

            showToast('Booking submitted successfully! Please scan the QR code, complete your payment, and upload your screenshot here.', 'success');
            
            // Switch to the Payment Info panel automatically so they can scan the QR code and pay
            state.currentTab = 'payment';
            document.querySelectorAll('.tab-panel').forEach(panel => panel.classList.remove('active'));
            const paymentPanel = document.getElementById('payment-panel');
            if (paymentPanel) paymentPanel.classList.add('active');
            renderAll();
        });
    }
}

// --- DYNAMIC PUBLIC PAYMENT DEPOSIT SCREENSHOT UPLOAD ---
function setupPublicPaymentForm() {
    const fileInput = document.getElementById('payment-screenshot-file');
    const previewBox = document.getElementById('receipt-preview-box');
    const form = document.getElementById('payment-screenshot-form');

    if (fileInput) {
        fileInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    compressImage(event.target.result, 600, 0.6, (compressedDataUrl) => {
                        state.uploadedScreenshotReceipt = compressedDataUrl;
                        if (previewBox) {
                            previewBox.innerHTML = `<img src="${compressedDataUrl}" style="max-width:100%; max-height:100%; object-fit:contain;">`;
                        }
                    });
                };
                reader.readAsDataURL(file);
            }
        });
    }

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const bookingVal = document.getElementById('payment-booking-select').value;
            const notes = document.getElementById('payment-tx-notes').value.trim();

            if (!bookingVal) {
                showToast('Please select your registered name', 'danger');
                return;
            }

            if (!state.uploadedScreenshotReceipt) {
                showToast('Please upload a screenshot receipt image', 'danger');
                return;
            }

            if (bookingVal.startsWith('TREKNAME_')) {
                const targetTrekName = bookingVal.replace('TREKNAME_', '');
                let bookings = getData('admin_bookings') || [];
                
                // Find the index of the most recent pending booking with this trek name
                let foundIdx = -1;
                for (let i = bookings.length - 1; i >= 0; i--) {
                    if (bookings[i].trekName === targetTrekName && bookings[i].status === 'Pending') {
                        foundIdx = i;
                        break;
                    }
                }
                
                if (foundIdx !== -1) {
                    bookings[foundIdx].paymentScreenshot = state.uploadedScreenshotReceipt;
                    bookings[foundIdx].txNotes = notes ? `${bookings[foundIdx].txNotes} | Ref Note: ${notes}` : bookings[foundIdx].txNotes;
                    setData('admin_bookings', bookings);
                }
            } else if (bookingVal.startsWith('SATNAME_')) {
                const targetHikeName = bookingVal.replace('SATNAME_', '');
                let satBookings = getData('admin_saturday_bookings') || [];
                
                let foundIdx = -1;
                for (let i = satBookings.length - 1; i >= 0; i--) {
                    if (satBookings[i].targetHike === targetHikeName && satBookings[i].status === 'Pending') {
                        foundIdx = i;
                        break;
                    }
                }
                
                if (foundIdx !== -1) {
                    satBookings[foundIdx].receipt = state.uploadedScreenshotReceipt;
                    if (notes) {
                        satBookings[foundIdx].txNotes = notes;
                    }
                    setData('admin_saturday_bookings', satBookings);
                }
            }

            form.reset();
            if (previewBox) {
                previewBox.innerHTML = `
                    <i class="fa-solid fa-cloud-arrow-up" style="font-size: 24px; color: var(--text-disabled);"></i>
                    <span style="font-size: 11px; color: var(--text-muted); margin-left: 8px;">Screenshot Preview</span>
                `;
            }
            state.uploadedScreenshotReceipt = '';

            showToast('Deposit receipt screenshot submitted successfully! Admin will confirm.', 'success');
            
            // Switch back to dashboard view
            state.currentTab = 'dashboard';
            document.querySelectorAll('.tab-panel').forEach(panel => panel.classList.remove('active'));
            document.getElementById('dashboard-panel').classList.add('active');
            renderAll();
        });
    }
}

function populatePublicTrekSelects() {
    const select = document.getElementById('signup-trek-select');
    const dateSelect = document.getElementById('signup-date-select');
    const treks = getData('admin_treks') || [];
    const saturdayHikes = getData('admin_saturday_hikes') || [];

    if (select) {
        select.innerHTML = '<option value="" disabled selected>Select an option</option>';
        if (state.currentTab === 'saturday-public') {
            saturdayHikes.forEach(t => {
                select.innerHTML += `<option value="SAT_${t.id}">${t.destination} (Saturday Hike)</option>`;
            });
        } else {
            treks.forEach(t => {
                select.innerHTML += `<option value="TREK_${t.id}">${t.name}</option>`;
            });
        }
    }

    if (dateSelect) {
        dateSelect.innerHTML = '<option value="" disabled selected>First select an option</option>';
    }
}

function populatePublicPaymentSelects() {
    const select = document.getElementById('payment-booking-select');
    const bookings = getData('admin_bookings') || [];
    const satBookings = getData('admin_saturday_bookings') || [];

    if (select) {
        select.innerHTML = '<option value="" disabled selected>Choose trek/hike to pay for...</option>';
        
        const seenTreks = new Set();
        
        bookings.filter(b => b.status === 'Pending').forEach(b => {
            const key = `TREK_${b.trekName}_${b.amount}`;
            if (!seenTreks.has(key)) {
                seenTreks.add(key);
                select.innerHTML += `<option value="TREKNAME_${b.trekName}">${b.trekName} (Rs. ${b.amount})</option>`;
            }
        });
        
        satBookings.filter(b => b.status === 'Pending').forEach(b => {
            const key = `SAT_${b.targetHike}_${b.amount}`;
            if (!seenTreks.has(key)) {
                seenTreks.add(key);
                select.innerHTML += `<option value="SATNAME_${b.targetHike}">${b.targetHike} (Rs. ${b.amount}) [Saturday Hike]</option>`;
            }
        });
    }
}

// --- MAIN RENDER ROUTER ---
function renderAll() {
    updateDynamicDates();
    togglePrivilegeElements();
    
    // Dynamic Brand Titles
    const content = getData('admin_content') || DEFAULT_CONTENT;
    document.getElementById('side-logo-text').textContent = content.logoName;
    document.getElementById('public-brand-logo').textContent = content.logoName;

    // "Edit Dashboard Anything" Title binding
    document.getElementById('roster-headline').textContent = content.logoName;
    
    // Bind Hero and Dashboard Texts
    const publicHeroTitle = document.getElementById('public-hero-title');
    if (publicHeroTitle) publicHeroTitle.textContent = content.heroTitle;

    const publicHeroDesc = document.getElementById('public-hero-desc');
    if (publicHeroDesc) publicHeroDesc.textContent = content.heroDesc;

    const heroCTARegister = document.getElementById('hero-cta-register');
    if (heroCTARegister) heroCTARegister.innerHTML = `<i class="fa-solid fa-file-signature"></i> ${content.heroBtn}`;

    const panelTitle = document.getElementById('panel-title');
    if (panelTitle) panelTitle.textContent = content.dashTitle || 'Trek Control Panel';

    const stat1ValEl = document.getElementById('public-stat1-val');
    if (stat1ValEl) stat1ValEl.textContent = content.stat1Val || '10+';

    const stat1LblEl = document.getElementById('public-stat1-lbl');
    if (stat1LblEl) stat1LblEl.textContent = content.stat1Lbl || 'Trek Routes';

    const stat2ValEl = document.getElementById('public-stat2-val');
    if (stat2ValEl) stat2ValEl.textContent = content.stat2Val || '2,048+';

    const stat2LblEl = document.getElementById('public-stat2-lbl');
    if (stat2LblEl) stat2LblEl.textContent = content.stat2Lbl || 'Happy Hikers';

    const heroPhotoStrip = document.getElementById('hero-photo-strip');
    if (heroPhotoStrip) {
        const photos = (content.heroPhotos && content.heroPhotos.length > 0) ? content.heroPhotos : [
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1533240332313-0db49b459ad6?q=80&w=600&auto=format&fit=crop"
        ];
        heroPhotoStrip.innerHTML = '';
        photos.forEach(p => {
            heroPhotoStrip.innerHTML += `<div class="photo-cell"><img src="${p}" alt="Hero mountain view"></div>`;
        });
    }

    // Dynamic Hero Background Photo
    const mountainHero = document.querySelector('.mountain-hero');
    if (mountainHero) {
        if (content.heroBg) {
            mountainHero.style.backgroundImage = `url(${content.heroBg})`;
        } else {
            mountainHero.style.backgroundImage = `url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=90&w=1600&auto=format&fit=crop')`;
        }
    }

    // Dynamic Logos
    const publicLogoBox = document.getElementById('public-logo-box');
    if (publicLogoBox) {
        if (content.logoImg) {
            publicLogoBox.innerHTML = `<img src="${content.logoImg}" style="max-width:100%; max-height:100%; object-fit:contain; border-radius:3px;">`;
        } else {
            publicLogoBox.innerHTML = `<i class="fa-solid fa-mountain"></i>`;
        }
    }

    const sideLogoIconContainer = document.getElementById('side-logo-icon-container');
    if (sideLogoIconContainer) {
        if (content.logoImg) {
            sideLogoIconContainer.innerHTML = `<img src="${content.logoImg}" style="width:24px; height:24px; object-fit:contain; border-radius:4px; margin-right:8px;">`;
        } else {
            sideLogoIconContainer.innerHTML = `<i id="side-logo-icon" class="fa-solid fa-mountain sidebar-logo-icon" style="margin-right:8px; color:var(--primary); font-size:16px;"></i>`;
        }
    }

    // Dynamic Social Links
    const igLink = document.getElementById('footer-social-instagram');
    if (igLink) igLink.href = content.socialInstagram || 'https://instagram.com';

    const ttLink = document.getElementById('footer-social-tiktok');
    if (ttLink) ttLink.href = content.socialTiktok || 'https://tiktok.com';

    const fbLink = document.getElementById('footer-social-facebook');
    if (fbLink) fbLink.href = content.socialFacebook || 'https://facebook.com';

    const waVal = content.socialWhatsapp || '9779800000000';
    const waUrl = waVal.startsWith('http') ? waVal : `https://wa.me/${waVal}`;
    
    const waLink = document.getElementById('footer-social-whatsapp');
    if (waLink) waLink.href = waUrl;

    const ytLink = document.getElementById('footer-social-youtube');
    if (ytLink) ytLink.href = content.socialYoutube || 'https://youtube.com';

    const waHeaderBtn = document.getElementById('header-whatsapp-btn');
    if (waHeaderBtn) waHeaderBtn.href = waUrl;

    // Dynamic Bank Account Details & QR
    const publicBankName = document.getElementById('public-bank-name');
    if (publicBankName) publicBankName.textContent = content.bankName || 'Nabil Bank Ltd.';

    const publicBankAcc = document.getElementById('public-bank-acc');
    if (publicBankAcc) publicBankAcc.textContent = content.bankAccount ? `Acct: ${content.bankAccount}` : 'Acct: 0110175003291';

    const publicBankHolder = document.getElementById('public-bank-holder');
    if (publicBankHolder) publicBankHolder.textContent = content.bankAccountName ? `Name: ${content.bankAccountName}` : 'Name: Trek With Kaushal Pvt. Ltd.';

    const qrContainer = document.getElementById('public-qr-container');
    if (qrContainer) {
        if (content.qrImg) {
            qrContainer.innerHTML = `<img src="${content.qrImg}" style="max-width:100%; max-height:100%; object-fit:contain; border-radius:4px;">`;
        } else {
            qrContainer.innerHTML = `
                <i class="fa-solid fa-qrcode" style="font-size: 110px; color:#0f172a;"></i>
                <div style="position:absolute; width:28px; height:28px; background:white; display:flex; align-items:center; justify-content:center; border-radius:4px; border:1px solid #ddd;">
                    <i class="fa-solid fa-mountain" style="color:var(--primary); font-size:14px;"></i>
                </div>
            `;
        }
    }

    renderDashboardStats();
    
    if (state.currentTab === 'dashboard') {
        renderRosterTable();
    } else if (state.currentTab === 'leaderboard' || state.currentTab === 'dna') {
        renderLeaderboards();
    } else if (state.currentTab === 'treks') {
        renderTrekTable();
    } else if (state.currentTab === 'community-log') {
        renderCommunityTable();
    } else if (state.currentTab === 'costs') {
        renderCostTable();
    } else if (state.currentTab === 'bookings') {
        renderBookingsTable();
    } else if (state.currentTab === 'payments') {
        renderPaymentsTable();
    } else if (state.currentTab === 'content') {
        renderContentFields();
    } else if (state.currentTab === 'feedback') {
        renderFeedbackList();
    } else if (state.currentTab === 'saturday-hikes') {
        renderSaturdayBlocksTable();
        renderSaturdayHikesTable();
        renderSaturdayBookingsTable();
    } else if (state.currentTab === 'saturday-public') {
        renderSaturdayPublicPage();
    }

    // Public Toggles
    populatePublicTrekSelects();
    populatePublicPaymentSelects();
    populatePublicItineraryMenu();

    // Auto-scroll the hero photo strip smoothly
    startHeroPhotoStripAutoScroll();
}

function startHeroPhotoStripAutoScroll() {
    const strip = document.getElementById('hero-photo-strip');
    if (!strip) return;

    if (window.heroScrollAnimationFrame) {
        cancelAnimationFrame(window.heroScrollAnimationFrame);
    }

    let scrollSpeed = 0.6; // super smooth slow speed
    let direction = 1; // 1 = right, -1 = left

    function step() {
        if (!strip) return;
        
        // Pause auto-scroll on hover so user can interact manually
        if (strip.matches(':hover')) {
            window.heroScrollAnimationFrame = requestAnimationFrame(step);
            return;
        }

        strip.scrollLeft += scrollSpeed * direction;

        const maxScrollLeft = strip.scrollWidth - strip.clientWidth;
        if (maxScrollLeft <= 5) {
            window.heroScrollAnimationFrame = requestAnimationFrame(step);
            return;
        }

        // Bounce back and forth smoothly when reaching ends
        if (strip.scrollLeft >= maxScrollLeft - 1) {
            direction = -1;
        } else if (strip.scrollLeft <= 1) {
            direction = 1;
        }

        window.heroScrollAnimationFrame = requestAnimationFrame(step);
    }

    window.heroScrollAnimationFrame = requestAnimationFrame(step);
}

function updateDynamicDates() {
    const dateElements = document.querySelectorAll('.dynamic-date');
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateElements.forEach(el => {
        el.textContent = today.toLocaleDateString('en-US', options);
    });
}

function togglePrivilegeElements() {
    const logged = isAdmin();

    // Toggle public header and footer
    document.getElementById('public-header').style.display = logged ? 'none' : 'flex';
    document.getElementById('public-footer').style.display = logged ? 'none' : 'flex';

    // Toggle mountain hero section
    const heroSection = document.getElementById('mountain-hero-section');
    if (heroSection) heroSection.style.display = logged ? 'none' : 'block';

    // Toggle admin sidebar and content headers
    document.getElementById('admin-sidebar').style.display = logged ? 'flex' : 'none';
    document.getElementById('admin-content-header').style.display = logged ? 'block' : 'none';

    // Toggle admin specific cards on the Overview page
    const adminCards = document.querySelectorAll('.admin-only-card');
    adminCards.forEach(c => {
        c.style.display = logged ? 'grid' : 'none';
    });
}

function calculateMetrics() {
    const bookings = getData('admin_bookings') || [];
    const costs = getData('admin_costs') || [];
    
    const totalRevenue = bookings
        .filter(b => b.status === 'Approved')
        .reduce((sum, b) => sum + b.amount, 0);

    const totalCosts = costs.reduce((sum, c) => sum + c.amount, 0);
    const netProfit = totalRevenue - totalCosts;

    return { totalRevenue, totalCosts, netProfit, bookingsCount: bookings.length };
}

function renderDashboardStats() {
    const metrics = calculateMetrics();
    const profitEl = document.getElementById('stat-profit');
    const costsEl = document.getElementById('stat-costs');
    const bookingsEl = document.getElementById('stat-bookings');

    if (profitEl) profitEl.textContent = `Rs. ${metrics.netProfit.toLocaleString()}`;
    if (costsEl) costsEl.textContent = `Rs. ${metrics.totalCosts.toLocaleString()}`;
    if (bookingsEl) bookingsEl.textContent = metrics.bookingsCount;
}

// --- DYNAMIC ROSTER TABLE ---
function parseParticipants(paxString) {
    if (!paxString) return { members: [], male: 0, female: 0, total: 0 };
    const parts = paxString.split(',');
    const members = [];
    let male = 0;
    let female = 0;

    parts.forEach(p => {
        const cleaned = p.trim();
        if (!cleaned) return;
        
        const namePart = cleaned.split('(')[0].trim();
        const initial = namePart ? namePart.charAt(0).toUpperCase() : '?';
        let gender = 'O';

        if (cleaned.includes('(M)') || cleaned.includes('(m)')) {
            male++;
            gender = 'M';
        } else if (cleaned.includes('(F)') || cleaned.includes('(f)')) {
            female++;
            gender = 'F';
        }
        
        members.push({ name: namePart, initial, gender });
    });

    return { members, male, female, total: parts.length };
}

function renderRosterTable() {
    const treks = getData('admin_treks') || [];
    const weekendBody = document.getElementById('weekend-roster-body');
    const extendedBody = document.getElementById('extended-roster-body');
    const completedBody = document.getElementById('completed-roster-body');

    if (weekendBody) weekendBody.innerHTML = '';
    if (extendedBody) extendedBody.innerHTML = '';
    if (completedBody) completedBody.innerHTML = '';

    const upcomingTreks = treks.filter(t => t.status !== 'Completed');
    const completedTreks = treks.filter(t => t.status === 'Completed');

    const weekendTreks = upcomingTreks.filter(t => t.duration.includes('1 Day') || t.duration.includes('2 Days'));
    const extendedTreks = upcomingTreks.filter(t => !t.duration.includes('1 Day') && !t.duration.includes('2 Days'));

    const populateCards = (treksList, container, isCompletedCategory = false) => {
        if (!container) return;
        if (treksList.length === 0) {
            container.innerHTML = `<div style="text-align:center; padding:24px; color:var(--text-muted); font-size:13px;">No treks currently listed in this category.</div>`;
            return;
        }

        treksList.forEach(trek => {
            const card = document.createElement('div');
            card.className = 'trek-roster-card';

            const roster = parseParticipants(trek.participants);
            
            // Overlapping bubble stack
            let bubbleHtml = '<div class="avatar-stack">';
            const maxVisible = 6;
            const visibleMembers = roster.members.slice(0, maxVisible);
            
            visibleMembers.forEach(mem => {
                let colorClass = mem.gender === 'F' ? 'avatar-f' : (mem.gender === 'M' ? 'avatar-m' : '');
                bubbleHtml += `
                    <div class="avatar-bubble confirmed-avatar ${colorClass}" style="width:28px; height:28px; font-size:11px;">
                        ${mem.initial}
                        <div class="confirmed-avatar-tooltip">${mem.name}</div>
                    </div>`;
            });

            if (roster.members.length > maxVisible) {
                bubbleHtml += `<div class="avatar-bubble more-bubble confirmed-avatar" style="width:28px; height:28px; font-size:11px; background:#e2e8f0; color:#475569; border-color:#fff;">+${roster.members.length - maxVisible}</div>`;
            }
            bubbleHtml += '</div>';

            const rosterStatsHtml = `<span class="gender-counts">M ${roster.male} F ${roster.female} T ${roster.total}</span>`;

            let difficultyBadge = '';
            if (trek.difficulty === 'Easy') difficultyBadge = '<span class="badge badge-success">🟢 Easy</span>';
            else if (trek.difficulty === 'Medium') difficultyBadge = '<span class="badge badge-warning">🟡 Moderate</span>';
            else difficultyBadge = '<span class="badge badge-danger">🔴 Hard</span>';

            // Photos - show all photos with scrolling
            const photos = trek.photos || [];
            let photosHtml = '';
            if (photos.length > 0) {
                photosHtml = '<div class="trek-card-photos">';
                photos.forEach(p => {
                    photosHtml += `
                        <div class="trek-card-photo" onclick="openPhotoOverlay('${p}')">
                            <img src="${p}" alt="Trek photo">
                        </div>`;
                });
                photosHtml += '</div>';
            }

            let actionButtonsHtml = '';
            if (isCompletedCategory) {
                actionButtonsHtml = `<span class="badge" style="background:#475569; color:#fff; font-weight:700; font-size:10px; padding: 6px 12px; border-radius:4px; display:inline-flex; align-items:center; gap:4px;"><i class="fa-solid fa-circle-check"></i> Past Expedition Completed</span>`;
            } else {
                actionButtonsHtml = `
                    <button class="btn btn-sm" onclick="openItineraryModal(${trek.id}); return false;" style="font-size:10px; padding: 4px 10px; background: var(--bg-light); border: 1px solid var(--border); color: var(--text-primary);">Itinerary &amp; Map</button>
                    <button class="btn btn-sm" onclick="selectItinerary('${trek.name}'); return false;" style="font-weight:700; background:var(--primary); color:#fff; font-size:10px;">REGISTER</button>
                `;
            }

            card.innerHTML = `
                <div class="trek-card-header">
                    <div class="trek-card-info">
                        <h4><i class="fa-solid fa-mountain" style="margin-right:6px; font-size:14px;"></i> ${trek.name}</h4>
                        <div class="trek-card-meta">
                            <span><i class="fa-regular fa-calendar"></i> ${trek.date || 'N/A'}</span>
                            <span><i class="fa-solid fa-clock"></i> ${trek.duration}</span>
                            <span>${difficultyBadge}</span>
                            <span><i class="fa-solid fa-user-tie"></i> ${trek.leader || 'Sundar'}</span>
                        </div>
                    </div>
                    <div class="trek-card-actions">
                        ${actionButtonsHtml}
                    </div>
                </div>
                ${photosHtml}
                <div class="trek-card-footer">
                    <div>
                        ${bubbleHtml}
                        ${rosterStatsHtml}
                    </div>
                    <div style="font-size:11px; color:var(--text-muted);">
                        <i class="fa-solid fa-images"></i> ${photos.length} photo${photos.length !== 1 ? 's' : ''}
                    </div>
                </div>
            `;
            container.appendChild(card);
        });
    };

    populateCards(weekendTreks, weekendBody, false);
    populateCards(extendedTreks, extendedBody, false);
    populateCards(completedTreks, completedBody, true);
}

window.openPhotoOverlay = (url) => {
    const modal = document.getElementById('photo-lightbox-modal');
    const img = document.getElementById('lightbox-img');
    if (modal && img) {
        img.src = url;
        modal.style.display = 'flex';
    } else {
        window.open(url, '_blank');
    }
};

window.closePhotoOverlay = (event) => {
    // Only close if clicking the overlay background or the close button, not the image itself
    if (event && event.target.id === 'lightbox-img') return;
    const modal = document.getElementById('photo-lightbox-modal');
    if (modal) {
        modal.style.display = 'none';
        document.getElementById('lightbox-img').src = '';
    }
};

// --- MASTER HIKERS COMMUNITY DASHBOARD AGGREGATOR ---
function filterLogsByPeriod(logs, period) {
    if (period === 'all') return logs;
    const now = Date.now();
    let cutoff = 0;
    if (period === '30d') cutoff = now - 30 * 24 * 60 * 60 * 1000;
    else if (period === '60d') cutoff = now - 60 * 24 * 60 * 60 * 1000;
    else if (period === '90d') cutoff = now - 90 * 24 * 60 * 60 * 1000;
    else if (period === '1yr') cutoff = now - 365 * 24 * 60 * 60 * 1000;

    return logs.filter(l => {
        // If it is mock data, keep it visible for demo purposes
        if (l.id < 1000000) return true;
        return l.id >= cutoff;
    });
}

function renderLeaderboards() {
    const overallLogs = getData('admin_community_log') || [];
    
    // 1. RENDER INSIGHTS STATS RIBBON
    const totalWalkers = overallLogs.length;
    const totalHikes = overallLogs.filter(l => l.category === 'Hike').reduce((sum, l) => sum + l.trips, 0);
    const totalKm = overallLogs.reduce((sum, l) => sum + l.distance, 0);
    const cutoff30d = Date.now() - 30 * 24 * 60 * 60 * 1000;
    const recentKm = overallLogs.filter(l => l.id >= cutoff30d || l.id < 1000000).reduce((sum, l) => sum + l.distance, 0);

    const walkersEl = document.getElementById('ci-total-walkers');
    const hikesEl = document.getElementById('ci-hikes-conducted');
    const kmEl = document.getElementById('ci-community-km');
    const recentEl = document.getElementById('ci-recent-30d');

    if (walkersEl) walkersEl.textContent = totalWalkers.toLocaleString();
    if (hikesEl) hikesEl.textContent = totalHikes.toLocaleString();
    if (kmEl) kmEl.textContent = `${totalKm.toLocaleString()} km`;
    if (recentEl) recentEl.textContent = `${recentKm.toLocaleString()} km`;

    // 2. RENDER HIKERS LEADERBOARD
    const hikersFiltered = filterLogsByPeriod(overallLogs.filter(l => l.category === 'Hike'), state.hikerPeriod);
    const hikerSortField = state.hikerSort; // 'distance' or 'trips'
    hikersFiltered.sort((a, b) => b[hikerSortField] - a[hikerSortField]);

    // Update Hikers Stat Boxes
    const hWalkersVal = hikersFiltered.length;
    const hEventsVal = hikersFiltered.reduce((sum, l) => sum + l.trips, 0);
    const hKmVal = hikersFiltered.reduce((sum, l) => sum + l.distance, 0);

    const hWalkersEl = document.getElementById('h-count-walkers');
    const hEventsEl = document.getElementById('h-count-events');
    const hKmEl = document.getElementById('h-count-km');

    if (hWalkersEl) hWalkersEl.textContent = hWalkersVal.toLocaleString();
    if (hEventsEl) hEventsEl.textContent = hEventsVal.toLocaleString();
    if (hKmEl) hKmEl.textContent = `${hKmVal.toLocaleString()} km`;

    const hikersBody = document.getElementById('hikers-leaderboard-body');
    if (hikersBody) {
        hikersBody.innerHTML = '';
        const visibleHikers = hikersFiltered.slice(0, state.hikerLimit);
        if (visibleHikers.length === 0) {
            hikersBody.innerHTML = `<tr><td colspan="4" style="text-align:center;" class="text-muted">No hikers logged.</td></tr>`;
        } else {
            visibleHikers.forEach((item, idx) => {
                const row = document.createElement('tr');
                const crown = idx === 0 ? ' 👑' : '';
                row.innerHTML = `
                    <td style="font-weight:800; color:var(--primary);">#${idx + 1}</td>
                    <td style="font-weight:700; color:var(--text-primary);">${item.name}${crown}</td>
                    <td style="font-weight:800; color:var(--primary);">${item.distance} km</td>
                    <td style="font-weight:600; color:var(--text-muted);">${item.trips} hikes</td>
                `;
                hikersBody.appendChild(row);
            });
        }
        
        // Show/Hide Hiker See More button
        const hBtn = document.getElementById('btn-see-more-hikers');
        if (hBtn) {
            if (hikersFiltered.length > 4) {
                hBtn.style.display = 'block';
                hBtn.innerHTML = state.hikerLimit === 4 ? `See More (+${hikersFiltered.length - 4}) <i class="fa-solid fa-chevron-down" style="font-size:10px;"></i>` : 'Show Less <i class="fa-solid fa-chevron-up" style="font-size:10px;"></i>';
            } else {
                hBtn.style.display = 'none';
            }
        }
    }

    // 3. RENDER TREKKERS LEADERBOARD
    const trekkersFiltered = filterLogsByPeriod(overallLogs.filter(l => l.category === 'Trek'), state.trekkerPeriod);
    const trekkerSortField = state.trekkerSort;
    trekkersFiltered.sort((a, b) => b[trekkerSortField] - a[trekkerSortField]);

    // Update Trekkers Stat Boxes
    const tWalkersVal = trekkersFiltered.length;
    const tEventsVal = trekkersFiltered.reduce((sum, l) => sum + l.trips, 0);
    const tKmVal = trekkersFiltered.reduce((sum, l) => sum + l.distance, 0);

    const tWalkersEl = document.getElementById('t-count-walkers');
    const tEventsEl = document.getElementById('t-count-events');
    const tKmEl = document.getElementById('t-count-km');

    if (tWalkersEl) tWalkersEl.textContent = tWalkersVal.toLocaleString();
    if (tEventsEl) tEventsEl.textContent = tEventsVal.toLocaleString();
    if (tKmEl) tKmEl.textContent = `${tKmVal.toLocaleString()} km`;

    const trekkersBody = document.getElementById('trekkers-leaderboard-body');
    if (trekkersBody) {
        trekkersBody.innerHTML = '';
        const visibleTrekkers = trekkersFiltered.slice(0, state.trekkerLimit);
        if (visibleTrekkers.length === 0) {
            trekkersBody.innerHTML = `<tr><td colspan="4" style="text-align:center;" class="text-muted">No trekkers logged.</td></tr>`;
        } else {
            visibleTrekkers.forEach((item, idx) => {
                const row = document.createElement('tr');
                const crown = idx === 0 ? ' 👑' : '';
                row.innerHTML = `
                    <td style="font-weight:800; color:#7c3aed;">#${idx + 1}</td>
                    <td style="font-weight:700; color:var(--text-primary);">${item.name}${crown}</td>
                    <td style="font-weight:800; color:#7c3aed;">${item.distance} km</td>
                    <td style="font-weight:600; color:var(--text-muted);">${item.trips} treks</td>
                `;
                trekkersBody.appendChild(row);
            });
        }

        // Show/Hide Trekker See More button
        const tBtn = document.getElementById('btn-see-more-trekkers');
        if (tBtn) {
            if (trekkersFiltered.length > 4) {
                tBtn.style.display = 'block';
                tBtn.innerHTML = state.trekkerLimit === 4 ? `See More (+${trekkersFiltered.length - 4}) <i class="fa-solid fa-chevron-down" style="font-size:10px;"></i>` : 'Show Less <i class="fa-solid fa-chevron-up" style="font-size:10px;"></i>';
            } else {
                tBtn.style.display = 'none';
            }
        }
    }

    // 4. RENDER COMBINED JOURNEY BOARD
    const journeyFiltered = filterLogsByPeriod([...overallLogs], state.journeyPeriod);
    const journeySortField = state.journeySort;
    journeyFiltered.sort((a, b) => b[journeySortField] - a[journeySortField]);

    const journeyBody = document.getElementById('journey-board-body');
    if (journeyBody) {
        journeyBody.innerHTML = '';
        const visibleJourney = journeyFiltered.slice(0, state.journeyLimit);
        if (visibleJourney.length === 0) {
            journeyBody.innerHTML = `<tr><td colspan="4" style="text-align:center;" class="text-muted">No community members logged.</td></tr>`;
        } else {
            visibleJourney.forEach((item, idx) => {
                const row = document.createElement('tr');
                const badge = item.category === 'Hike' ? '<span class="badge badge-success">Hike</span>' : '<span class="badge badge-warning" style="background:#7c3aed; color:white;">Trek</span>';
                const crown = idx === 0 ? ' 👑' : '';
                const countSuffix = item.category === 'Hike' ? 'hikes' : 'treks';
                row.innerHTML = `
                    <td style="font-weight:800; color:var(--primary);">#${idx + 1}</td>
                    <td style="font-weight:700; color:var(--text-primary);">${item.name}${crown}</td>
                    <td>${badge}</td>
                    <td style="font-weight:800; color:var(--primary);">${item.distance} km</td>
                `;
                journeyBody.appendChild(row);
            });
        }

        // Show/Hide Journey See More button
        const jBtn = document.getElementById('btn-see-more-journey');
        if (jBtn) {
            if (journeyFiltered.length > 5) {
                jBtn.style.display = 'block';
                jBtn.innerHTML = state.journeyLimit === 5 ? `See More (+${journeyFiltered.length - 5}) <i class="fa-solid fa-chevron-down" style="font-size:10px;"></i>` : 'Show Less <i class="fa-solid fa-chevron-up" style="font-size:10px;"></i>';
            } else {
                jBtn.style.display = 'none';
            }
        }
    }

    // 5. RENDER COMMUNITY KM JOURNEY STATS & PROGRESS & MILESTONES
    const kmFiltered = filterLogsByPeriod([...overallLogs], state.kmPeriod);
    const kmTotalVal = kmFiltered.reduce((sum, l) => sum + l.distance, 0);
    const kmEventsVal = kmFiltered.reduce((sum, l) => sum + l.trips, 0);
    const kmHikeVal = kmFiltered.filter(l => l.category === 'Hike').reduce((sum, l) => sum + l.distance, 0);
    const kmTrekVal = kmFiltered.filter(l => l.category === 'Trek').reduce((sum, l) => sum + l.distance, 0);

    const kmTotalEl = document.getElementById('km-total');
    const kmEventsEl = document.getElementById('km-events');
    const kmHikeEl = document.getElementById('km-hike');
    const kmTrekEl = document.getElementById('km-trek');

    if (kmTotalEl) kmTotalEl.textContent = `${kmTotalVal.toLocaleString()} km`;
    if (kmEventsEl) kmEventsEl.textContent = kmEventsVal;
    if (kmHikeEl) kmHikeEl.textContent = `${kmHikeVal.toLocaleString()} km`;
    if (kmTrekEl) kmTrekEl.textContent = `${kmTrekVal.toLocaleString()} km`;

    // Render KM Milestones Achieved status
    const kmMilestonesEl = document.getElementById('km-milestones');
    if (kmMilestonesEl) {
        kmMilestonesEl.innerHTML = `
            <div class="km-milestone ${kmHikeVal >= 100 ? 'achieved' : ''}">
                <div class="km-milestone-icon">${kmHikeVal >= 100 ? '🏆' : '🔒'}</div>
                <div class="km-milestone-details">
                    <div class="km-milestone-title">Hike Pioneer (100 km Hike)</div>
                    <div class="km-milestone-status ${kmHikeVal >= 100 ? 'reached' : 'pending'}">${kmHikeVal >= 100 ? 'REACHED' : `${Math.round(kmHikeVal)}/100 km`}</div>
                </div>
            </div>
            <div class="km-milestone ${kmTrekVal >= 500 ? 'achieved' : ''}">
                <div class="km-milestone-icon">${kmTrekVal >= 500 ? '🏆' : '🔒'}</div>
                <div class="km-milestone-details">
                    <div class="km-milestone-title">Trek Expert (500 km Trek)</div>
                    <div class="km-milestone-status ${kmTrekVal >= 500 ? 'reached' : 'pending'}">${kmTrekVal >= 500 ? 'REACHED' : `${Math.round(kmTrekVal)}/500 km`}</div>
                </div>
            </div>
            <div class="km-milestone ${kmTotalVal >= 1000 ? 'achieved' : ''}">
                <div class="km-milestone-icon">${kmTotalVal >= 1000 ? '🏆' : '🔒'}</div>
                <div class="km-milestone-details">
                    <div class="km-milestone-title">Nepal Conqueror (1000 km Combined)</div>
                    <div class="km-milestone-status ${kmTotalVal >= 1000 ? 'reached' : 'pending'}">${kmTotalVal >= 1000 ? 'REACHED' : `${Math.round(kmTotalVal)}/1000 km`}</div>
                </div>
            </div>
        `;
    }

    // Segmented Horizontal Progress Bar Calculation
    const targetGoal = 1000;
    const hikePercent = Math.min((kmHikeVal / targetGoal) * 100, 100);
    const trekPercent = Math.min((kmTrekVal / targetGoal) * 100, 100 - hikePercent);

    const hikeProgressEl = document.getElementById('km-progress-hike');
    const trekProgressEl = document.getElementById('km-progress-trek');

    if (hikeProgressEl) hikeProgressEl.style.width = `${hikePercent}%`;
    if (trekProgressEl) trekProgressEl.style.width = `${trekPercent}%`;

    // 6. RENDER DEMOGRAPHICS DNA CARD
    renderDemographics();

    // 7. ATTACH COMMUNITY BOARD INTERACTION LISTENERS (Runs Once)
    attachCommunityBoardListeners();
}

function renderDemographics() {
    const overallLogs = getData('admin_community_log') || [];
    const dnaFiltered = filterLogsByPeriod([...overallLogs], state.dnaPeriod);

    const donut = document.getElementById('dna-gender-donut');
    const totalDnaWalkers = document.getElementById('dna-donut-total');
    const ageChart = document.getElementById('dna-age-chart');

    if (dnaFiltered.length === 0) {
        if (donut) donut.style.background = 'conic-gradient(#cbd5e1 0% 100%)';
        if (totalDnaWalkers) totalDnaWalkers.textContent = '0';
        if (ageChart) ageChart.innerHTML = `<div style="text-align:center; padding: 20px;" class="text-muted">No data logs in this period.</div>`;
        return;
    }

    // Gender ratios
    let male = 0, female = 0, other = 0;
    dnaFiltered.forEach(l => {
        if (l.gender === 'Male') male++;
        else if (l.gender === 'Female') female++;
        else other++;
    });

    const mPct = (male / dnaFiltered.length) * 100;
    const fPct = (female / dnaFiltered.length) * 100;
    const oPct = (other / dnaFiltered.length) * 100;

    if (donut) {
        donut.style.background = `conic-gradient(
            #4dd0e1 0% ${mPct}%, 
            #ffb74d ${mPct}% ${mPct + fPct}%, 
            #d4e157 ${mPct + fPct}% 100%
        )`;
    }

    if (totalDnaWalkers) totalDnaWalkers.textContent = dnaFiltered.length;

    // Age Groups
    let ageGroups = { '18-25': 0, '26-35': 0, '36-50': 0, '50+': 0 };
    dnaFiltered.forEach(l => {
        if (l.age <= 25) ageGroups['18-25']++;
        else if (l.age <= 35) ageGroups['26-35']++;
        else if (l.age <= 50) ageGroups['36-50']++;
        else ageGroups['50+']++;
    });

    const maxCount = Math.max(...Object.values(ageGroups), 1);
    if (ageChart) {
        ageChart.innerHTML = '';
        Object.entries(ageGroups).forEach(([group, count]) => {
            const fillPercent = (count / maxCount) * 100;
            const barWrapper = document.createElement('div');
            barWrapper.className = 'dna-age-row';
            barWrapper.style = 'display: flex; align-items: center; gap: 12px; margin-bottom: 12px;';
            barWrapper.innerHTML = `
                <div class="dna-age-label" style="width: 50px; font-size: 11px; font-weight: 700; color: var(--text-muted);">${group}</div>
                <div class="dna-age-bar-bg" style="flex-grow: 1; background: #e2e8f0; height: 8px; border-radius: 4px; overflow: hidden; position: relative;">
                    <div class="dna-age-bar" style="width: ${fillPercent}%; background: var(--primary); height: 100%; border-radius: 4px; transition: width 0.3s ease;"></div>
                </div>
                <div class="dna-age-value" style="width: 25px; text-align: right; font-size: 11px; font-weight: 800; color: var(--text-primary);">${count}</div>
            `;
            ageChart.appendChild(barWrapper);
        });
    }
}

function attachCommunityBoardListeners() {
    const container = document.getElementById('leaderboard-panel');
    if (!container || container.dataset.listenersAttached === 'true') return;
    container.dataset.listenersAttached = 'true';

    // Hikers Period Buttons
    const hFilters = document.getElementById('hiker-time-filters');
    if (hFilters) {
        hFilters.addEventListener('click', (e) => {
            const btn = e.target.closest('.filter-tab');
            if (btn) {
                hFilters.querySelectorAll('.filter-tab').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                state.hikerPeriod = btn.getAttribute('data-period');
                renderLeaderboards();
            }
        });
    }

    // Hikers Sort Buttons
    const hSortFilters = document.getElementById('hiker-sort-filters');
    if (hSortFilters) {
        hSortFilters.addEventListener('click', (e) => {
            const btn = e.target.closest('.filter-tab');
            if (btn) {
                hSortFilters.querySelectorAll('.filter-tab').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                state.hikerSort = btn.getAttribute('data-sort') === 'count' ? 'trips' : 'distance';
                renderLeaderboards();
            }
        });
    }

    // Hikers See More
    const hBtn = document.getElementById('btn-see-more-hikers');
    if (hBtn) {
        hBtn.addEventListener('click', () => {
            state.hikerLimit = state.hikerLimit === 4 ? 999 : 4;
            renderLeaderboards();
        });
    }

    // Trekkers Period Buttons
    const tFilters = document.getElementById('trekker-time-filters');
    if (tFilters) {
        tFilters.addEventListener('click', (e) => {
            const btn = e.target.closest('.filter-tab');
            if (btn) {
                tFilters.querySelectorAll('.filter-tab').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                state.trekkerPeriod = btn.getAttribute('data-period');
                renderLeaderboards();
            }
        });
    }

    // Trekkers Sort Buttons
    const tSortFilters = document.getElementById('trekker-sort-filters');
    if (tSortFilters) {
        tSortFilters.addEventListener('click', (e) => {
            const btn = e.target.closest('.filter-tab');
            if (btn) {
                tSortFilters.querySelectorAll('.filter-tab').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                state.trekkerSort = btn.getAttribute('data-sort') === 'count' ? 'trips' : 'distance';
                renderLeaderboards();
            }
        });
    }

    // Trekkers See More
    const tBtn = document.getElementById('btn-see-more-trekkers');
    if (tBtn) {
        tBtn.addEventListener('click', () => {
            state.trekkerLimit = state.trekkerLimit === 4 ? 999 : 4;
            renderLeaderboards();
        });
    }

    // Journey Period Buttons
    const jFilters = document.getElementById('journey-time-filters');
    if (jFilters) {
        jFilters.addEventListener('click', (e) => {
            const btn = e.target.closest('.filter-tab');
            if (btn) {
                jFilters.querySelectorAll('.filter-tab').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                state.journeyPeriod = btn.getAttribute('data-period');
                renderLeaderboards();
            }
        });
    }

    // Journey Sort Buttons
    const jSortFilters = document.getElementById('journey-sort-filters');
    if (jSortFilters) {
        jSortFilters.addEventListener('click', (e) => {
            const btn = e.target.closest('.filter-tab');
            if (btn) {
                jSortFilters.querySelectorAll('.filter-tab').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                state.journeySort = btn.getAttribute('data-sort') === 'count' ? 'trips' : 'distance';
                renderLeaderboards();
            }
        });
    }

    // Journey See More
    const jBtn = document.getElementById('btn-see-more-journey');
    if (jBtn) {
        jBtn.addEventListener('click', () => {
            state.journeyLimit = state.journeyLimit === 5 ? 999 : 5;
            renderLeaderboards();
        });
    }

    // KM Period Buttons
    const kmFilters = document.getElementById('km-time-filters');
    if (kmFilters) {
        kmFilters.addEventListener('click', (e) => {
            const btn = e.target.closest('.filter-tab');
            if (btn) {
                kmFilters.querySelectorAll('.filter-tab').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                state.kmPeriod = btn.getAttribute('data-period');
                renderLeaderboards();
            }
        });
    }

    // DNA Period Buttons
    const dnaFilters = document.getElementById('dna-time-filters');
    if (dnaFilters) {
        dnaFilters.addEventListener('click', (e) => {
            const btn = e.target.closest('.filter-tab');
            if (btn) {
                dnaFilters.querySelectorAll('.filter-tab').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                state.dnaPeriod = btn.getAttribute('data-period');
                renderLeaderboards();
            }
        });
    }
}

// --- EXPEDITION TREK PACKAGE MANAGEMENT ---
function setupTrekManagement() {
    const addTrekBtn = document.getElementById('btn-add-trek');
    const trekModal = document.getElementById('trek-modal');
    const trekForm = document.getElementById('trek-form');
    const closeTrekBtn = document.getElementById('btn-trek-close');
    const photosInput = document.getElementById('trek-photos-input');

    if (addTrekBtn) {
        addTrekBtn.addEventListener('click', () => {
            state.editingTrekId = null;
            state.uploadedPhotos = [];
            document.getElementById('trek-modal-title').textContent = 'Register New Trek Package';
            trekForm.reset();
            renderPhotoThumbnails();
            trekModal.style.display = 'flex';
        });
    }

    if (closeTrekBtn) {
        closeTrekBtn.addEventListener('click', () => {
            trekModal.style.display = 'none';
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target === trekModal) {
            trekModal.style.display = 'none';
        }
    });

    if (photosInput) {
        photosInput.addEventListener('change', (e) => {
            const files = Array.from(e.target.files);
            files.forEach(file => {
                const reader = new FileReader();
                reader.onload = (event) => {
                    compressImage(event.target.result, 800, 0.7, (compressedDataUrl) => {
                        state.uploadedPhotos.push(compressedDataUrl);
                        renderPhotoThumbnails();
                    });
                };
                reader.readAsDataURL(file);
            });
            e.target.value = '';
        });
    }

    if (trekForm) {
        trekForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('trek-name').value.trim();
            const price = parseFloat(document.getElementById('trek-price').value);
            const duration = document.getElementById('trek-duration').value.trim();
            const difficulty = document.getElementById('trek-difficulty').value;
            const date = document.getElementById('trek-date').value.trim();
            const leader = document.getElementById('trek-leader').value.trim();
            const status = document.getElementById('trek-status').value;
            const participants = document.getElementById('trek-participants').value.trim();
            const mapLink = document.getElementById('trek-map-link').value.trim();
            const description = document.getElementById('trek-description').value.trim();

            if (!name || isNaN(price) || price <= 0 || !duration) {
                showToast('Please fill out valid trek details', 'danger');
                return;
            }

            let treks = getData('admin_treks') || [];

            if (state.editingTrekId) {
                treks = treks.map(t => {
                    if (t.id === state.editingTrekId) {
                        return { 
                            ...t, name, price, duration, difficulty, 
                            date, leader, status, participants, mapLink, description, photos: state.uploadedPhotos 
                        };
                    }
                    return t;
                });
                showToast('Expedition package updated successfully!', 'success');
            } else {
                const newTrek = {
                    id: Date.now(),
                    name, price, duration, difficulty,
                    date, leader, status, participants, mapLink, description, photos: state.uploadedPhotos
                };
                treks.push(newTrek);
                showToast('New trek route registered!', 'success');
            }

            setData('admin_treks', treks);
            trekModal.style.display = 'none';
            renderAll();
        });
    }
}

function renderPhotoThumbnails() {
    const grid = document.getElementById('modal-photo-thumbnails');
    grid.innerHTML = '';

    state.uploadedPhotos.forEach((p, idx) => {
        const wrapper = document.createElement('div');
        wrapper.className = 'photo-thumbnail-wrapper';
        wrapper.innerHTML = `
            <img src="${p}" alt="Preview">
            <button type="button" class="photo-thumbnail-delete" onclick="removeUploadedPhoto(${idx})">&times;</button>
        `;
        grid.appendChild(wrapper);
    });
}

window.removeUploadedPhoto = (idx) => {
    state.uploadedPhotos.splice(idx, 1);
    renderPhotoThumbnails();
};

function renderTrekTable() {
    const treks = getData('admin_treks') || [];
    const tbody = document.getElementById('treks-table-body');
    tbody.innerHTML = '';

    if (treks.length === 0) {
        tbody.innerHTML = `<tr><td colspan="8" style="text-align:center;" class="text-muted">No treks logged.</td></tr>`;
        return;
    }

    treks.forEach((trek, idx) => {
        const row = document.createElement('tr');
        const count = trek.photos ? trek.photos.length : 0;
        
        row.innerHTML = `
            <td style="font-weight: 700; color: var(--text-muted);">#${idx + 1}</td>
            <td style="font-weight: 600; color: var(--text-primary);">${trek.name}</td>
            <td style="font-weight: 700; color: var(--primary);">Rs. ${trek.price.toLocaleString()}</td>
            <td style="font-weight: 600;">${trek.duration}</td>
            <td>
                <span class="badge ${trek.difficulty === 'Easy' ? 'badge-success' : trek.difficulty === 'Medium' ? 'badge-warning' : 'badge-danger'}">${trek.difficulty}</span>
                <span class="badge" style="margin-top: 4px; display: block; width: fit-content; background: ${trek.status === 'Completed' ? '#64748b' : 'var(--primary)'}; color: white; font-size: 10px;">${trek.status || 'Upcoming'}</span>
            </td>
            <td>${trek.leader || 'Pasang Sherpa'}</td>
            <td style="font-weight: 700; color: var(--secondary);"><i class="fa-solid fa-images"></i> ${count} photos</td>
            <td>
                <div class="action-buttons">
                    <button class="btn btn-sm btn-info" onclick="openItineraryModal(${trek.id})">View Itinerary</button>
                    <button class="action-icon complete" style="color: ${trek.status === 'Completed' ? 'var(--success)' : '#94a3b8'};" onclick="toggleTrekStatus(${trek.id})" title="${trek.status === 'Completed' ? 'Mark as Upcoming' : 'Mark as Completed'}"><i class="${trek.status === 'Completed' ? 'fa-solid fa-circle-check' : 'fa-regular fa-circle-check'}"></i></button>
                    <button class="action-icon edit" onclick="editTrek(${trek.id})"><i class="fa-solid fa-pen-to-square"></i></button>
                    <button class="action-icon delete" onclick="deleteTrek(${trek.id})"><i class="fa-solid fa-trash-can"></i></button>
                </div>
            </td>
        `;
        tbody.appendChild(row);
    });
}

window.editTrek = (id) => {
    const treks = getData('admin_treks') || [];
    const trek = treks.find(t => t.id === id);
    if (!trek) return;

    state.editingTrekId = id;
    state.uploadedPhotos = [...(trek.photos || [])];

    document.getElementById('trek-modal-title').textContent = 'Edit Trek Package Details';
    document.getElementById('trek-name').value = trek.name;
    document.getElementById('trek-price').value = trek.price;
    document.getElementById('trek-duration').value = trek.duration;
    document.getElementById('trek-difficulty').value = trek.difficulty;
    document.getElementById('trek-date').value = trek.date || '';
    document.getElementById('trek-leader').value = trek.leader || '';
    document.getElementById('trek-status').value = trek.status || 'Upcoming';
    document.getElementById('trek-participants').value = trek.participants || '';
    document.getElementById('trek-map-link').value = trek.mapLink || '';
    document.getElementById('trek-description').value = trek.description || '';

    renderPhotoThumbnails();
    document.getElementById('trek-modal').style.display = 'flex';
};

window.deleteTrek = (id) => {
    if (confirm('Delete this expedition?')) {
        let treks = getData('admin_treks') || [];
        treks = treks.filter(t => t.id !== id);
        setData('admin_treks', treks);
        showToast('Expedition package deleted', 'success');
        renderAll();
    }
};

window.toggleTrekStatus = (id) => {
    let treks = getData('admin_treks') || [];
    treks = treks.map(t => {
        if (t.id === id) {
            const newStatus = t.status === 'Completed' ? 'Upcoming' : 'Completed';
            showToast(`Trek status updated to ${newStatus}`, 'success');
            return { ...t, status: newStatus };
        }
        return t;
    });
    setData('admin_treks', treks);
    renderAll();
};

// --- COMMUNITY MEMBERS LOG ---
function setupCommunityLog() {
    const addBtn = document.getElementById('btn-add-member');
    const modal = document.getElementById('community-modal');
    const closeBtn = document.getElementById('btn-community-close');
    const form = document.getElementById('community-form');

    if (addBtn) {
        addBtn.addEventListener('click', () => {
            state.editingMemberId = null;
            document.getElementById('community-modal-title').textContent = 'Log Community Member';
            form.reset();
            
            // Hide distance and total trips fields for new members
            const statsRow = document.getElementById('member-stats-row');
            if (statsRow) {
                statsRow.style.display = 'none';
            }
            const currentStats = document.getElementById('member-current-stats');
            if (currentStats) {
                currentStats.style.display = 'none';
            }
            document.getElementById('member-distance').removeAttribute('required');
            document.getElementById('member-trips').removeAttribute('required');
            
            modal.style.display = 'flex';
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('member-name').value.trim();
            const category = document.getElementById('member-category').value;
            const gender = document.getElementById('member-gender').value;
            const age = parseInt(document.getElementById('member-age').value);

            const isEditing = !!state.editingMemberId;
            let logs = getData('admin_community_log') || [];

            let distance = 0;
            let trips = 0;

            if (isEditing) {
                const currentMember = logs.find(l => l.id === state.editingMemberId);
                const currentDistance = currentMember ? parseFloat(currentMember.distance || 0) : 0;
                const currentTrips = currentMember ? parseInt(currentMember.trips || 0) : 0;

                const distanceToAdd = parseFloat(document.getElementById('member-distance').value) || 0;
                const tripsToAdd = parseInt(document.getElementById('member-trips').value) || 0;

                distance = currentDistance + distanceToAdd;
                trips = currentTrips + tripsToAdd;
            } else {
                distance = 0;
                trips = 0;
            }

            if (!name || isNaN(distance) || isNaN(trips) || isNaN(age)) {
                showToast('Please enter valid data values.', 'danger');
                return;
            }

            if (state.editingMemberId) {
                logs = logs.map(l => {
                    if (l.id === state.editingMemberId) {
                        return { ...l, name, category, distance, trips, gender, age };
                    }
                    return l;
                });
                showToast('Member entry updated successfully!', 'success');
            } else {
                const newMember = {
                    id: Date.now(),
                    name, category, distance, trips, gender, age
                };
                logs.push(newMember);
                showToast('New community member logged!', 'success');
            }

            setData('admin_community_log', logs);
            modal.style.display = 'none';
            renderAll();
        });
    }
}

function renderCommunityTable() {
    const logs = getData('admin_community_log') || [];
    const tbody = document.getElementById('community-table-body');
    tbody.innerHTML = '';

    if (logs.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" style="text-align:center;" class="text-muted">No community records.</td></tr>`;
        return;
    }

    logs.forEach(l => {
        const row = document.createElement('tr');
        const isSystemAdmin = l.name.toLowerCase().trim() === 'admin' || l.name.toLowerCase().trim() === 'administrator';
        const actionsHtml = isSystemAdmin ? 
            `<span class="badge" style="background:#64748b; color:white; font-size:10px; font-weight:600; padding:4px 8px; border-radius:4px; display:inline-flex; align-items:center; gap:4px;"><i class="fa-solid fa-lock"></i> Protected</span>` : 
            `<div class="action-buttons">
                <button class="action-icon edit" onclick="editMember(${l.id})"><i class="fa-solid fa-pen-to-square"></i></button>
                <button class="action-icon delete" onclick="deleteMember(${l.id})"><i class="fa-solid fa-trash-can"></i></button>
            </div>`;

        row.innerHTML = `
            <td style="font-weight:700; color:var(--text-primary);">${l.name}</td>
            <td style="font-weight:600;"><span class="badge ${l.category === 'Hike' ? 'badge-success' : 'badge-warning'}">${l.category}</span></td>
            <td style="font-weight:800; color:var(--primary);">${l.distance} km</td>
            <td style="font-weight:600;">${l.trips}</td>
            <td>${l.gender}</td>
            <td>${l.age} Yrs</td>
            <td>${actionsHtml}</td>
        `;
        tbody.appendChild(row);
    });
}

window.editMember = (id) => {
    const logs = getData('admin_community_log') || [];
    const l = logs.find(item => item.id === id);
    if (!l) return;

    state.editingMemberId = id;
    document.getElementById('community-modal-title').textContent = 'Edit Community Member';
    document.getElementById('member-name').value = l.name;
    document.getElementById('member-category').value = l.category;
    
    // Default incremental additions to 0
    document.getElementById('member-distance').value = 0;
    document.getElementById('member-trips').value = 0;
    document.getElementById('member-gender').value = l.gender;
    document.getElementById('member-age').value = l.age;

    // Show current stats label above inputs
    const currentStats = document.getElementById('member-current-stats');
    if (currentStats) {
        currentStats.textContent = `Current Stats: ${l.distance} km walked / ${l.trips} trips completed`;
        currentStats.style.display = 'block';
    }

    // Show stats row and make them required on edit
    const statsRow = document.getElementById('member-stats-row');
    if (statsRow) {
        statsRow.style.display = 'flex';
    }
    document.getElementById('member-distance').setAttribute('required', 'required');
    document.getElementById('member-trips').setAttribute('required', 'required');

    document.getElementById('community-modal').style.display = 'flex';
};

window.quickEditMember = (id) => {
    // Switch to community-log tab in the UI
    const navItem = document.querySelector('.nav-item[data-tab="community-log"]');
    if (navItem) {
        document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
        navItem.classList.add('active');
    }
    
    document.querySelectorAll('.tab-panel').forEach(panel => panel.classList.remove('active'));
    const panel = document.getElementById('community-log-panel');
    if (panel) {
        panel.classList.add('active');
    }
    
    state.currentTab = 'community-log';
    renderAll();
    
    // Open the edit member modal immediately
    window.editMember(id);
};

window.deleteMember = (id) => {
    if (confirm('Permanently delete this community member log?')) {
        let logs = getData('admin_community_log') || [];
        logs = logs.filter(l => l.id !== id);
        setData('admin_community_log', logs);
        showToast('Member entry deleted', 'success');
        renderAll();
    }
};

// --- COST MANAGEMENT MODULE ---
function setupCostManagement() {
    const addCostBtn = document.getElementById('btn-add-cost');
    const costModal = document.getElementById('cost-modal');
    const costForm = document.getElementById('cost-form');
    const closeCostBtn = document.getElementById('btn-cost-close');

    if (addCostBtn) {
        addCostBtn.addEventListener('click', () => {
            state.editingCostId = null;
            document.getElementById('modal-title').textContent = 'Log Business Expense';
            costForm.reset();
            costModal.style.display = 'flex';
        });
    }

    if (closeCostBtn) {
        closeCostBtn.addEventListener('click', () => {
            costModal.style.display = 'none';
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target === costModal) {
            costModal.style.display = 'none';
        }
    });

    if (costForm) {
        costForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const category = document.getElementById('cost-category').value;
            const amount = parseFloat(document.getElementById('cost-amount').value);
            const description = document.getElementById('cost-desc').value;

            if (!category || isNaN(amount) || amount <= 0) {
                showToast('Please enter valid cost details', 'danger');
                return;
            }

            let costs = getData('admin_costs') || [];

            if (state.editingCostId) {
                costs = costs.map(c => {
                    if (c.id === state.editingCostId) {
                        return { ...c, category, amount, description };
                    }
                    return c;
                });
                showToast('Expense updated successfully!', 'success');
            } else {
                const newCost = {
                    id: Date.now(),
                    category,
                    amount,
                    description
                };
                costs.push(newCost);
                showToast('New expense logged successfully!', 'success');
            }

            setData('admin_costs', costs);
            costModal.style.display = 'none';
            renderAll();
        });
    }
}

function renderCostTable() {
    const costs = getData('admin_costs') || [];
    const tbody = document.getElementById('costs-table-body');
    tbody.innerHTML = '';

    if (costs.length === 0) {
        tbody.innerHTML = `<tr><td colspan="5" style="text-align:center;" class="text-muted">No expenses found. Use "Add Expense" to log costs.</td></tr>`;
        return;
    }

    costs.forEach((cost, idx) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td style="font-weight: 700; color: var(--text-muted);">#${idx + 1}</td>
            <td style="font-weight: 600;"><span class="badge badge-danger">${cost.category}</span></td>
            <td>${cost.description || 'N/A'}</td>
            <td style="font-weight: 700; color: var(--danger);">Rs. ${cost.amount.toLocaleString()}</td>
            <td>
                <div class="action-buttons">
                    <button class="action-icon edit" onclick="editCost(${cost.id})"><i class="fa-solid fa-pen-to-square"></i></button>
                    <button class="action-icon delete" onclick="deleteCost(${cost.id})"><i class="fa-solid fa-trash-can"></i></button>
                </div>
            </td>
        `;
        tbody.appendChild(row);
    });
}

window.editCost = (id) => {
    const costs = getData('admin_costs') || [];
    const cost = costs.find(c => c.id === id);
    if (!cost) return;

    state.editingCostId = id;
    document.getElementById('modal-title').textContent = 'Edit Business Expense';
    document.getElementById('cost-category').value = cost.category;
    document.getElementById('cost-amount').value = cost.amount;
    document.getElementById('cost-desc').value = cost.description;

    document.getElementById('cost-modal').style.display = 'flex';
};

window.deleteCost = (id) => {
    if (confirm('Are you sure you want to permanently delete this expense?')) {
        let costs = getData('admin_costs') || [];
        costs = costs.filter(c => c.id !== id);
        setData('admin_costs', costs);
        showToast('Expense record deleted', 'success');
        renderAll();
    }
};

// --- BOOKING & DEPOSIT SCREENSHOT MANAGEMENT (ADMIN CONFORM PAYMENT) ---
// Screenshot data store (avoids breaking HTML attributes with large base64 strings)
const _screenshotStore = {};

// --- SATURDAY HIKES MANAGEMENT ---
function setupSaturdayHikesManagement() {
    const btnAddHike = document.getElementById('btn-add-saturday-hike');
    const modalHike = document.getElementById('saturday-modal');
    const closeHike = document.getElementById('btn-saturday-close');
    const formHike = document.getElementById('saturday-form');
    const photosInput = document.getElementById('saturday-photos-input');

    if (btnAddHike) {
        btnAddHike.addEventListener('click', () => {
            state.editingSaturdayHikeId = null;
            state.uploadedSaturdayPhotos = [];
            document.getElementById('saturday-modal-title').textContent = 'Register Saturday Hike';
            formHike.reset();
            renderSaturdayPhotoThumbnails();
            modalHike.style.display = 'flex';
        });
    }

    if (closeHike) {
        closeHike.addEventListener('click', () => {
            modalHike.style.display = 'none';
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target === modalHike) {
            modalHike.style.display = 'none';
        }
    });

    if (photosInput) {
        photosInput.addEventListener('change', (e) => {
            if (!state.uploadedSaturdayPhotos) state.uploadedSaturdayPhotos = [];
            const files = Array.from(e.target.files);
            files.forEach(file => {
                const reader = new FileReader();
                reader.onload = (event) => {
                    compressImage(event.target.result, 800, 0.7, (compressedDataUrl) => {
                        state.uploadedSaturdayPhotos.push(compressedDataUrl);
                        renderSaturdayPhotoThumbnails();
                    });
                };
                reader.readAsDataURL(file);
            });
            e.target.value = '';
        });
    }

    if (formHike) {
        formHike.addEventListener('submit', (e) => {
            e.preventDefault();
            const destination = document.getElementById('saturday-destination').value.trim();
            const price = parseFloat(document.getElementById('saturday-price').value);
            const date = document.getElementById('saturday-date').value.trim();
            const leader = document.getElementById('saturday-leader').value.trim();
            const mapLink = document.getElementById('saturday-map-link').value.trim();
            const description = document.getElementById('saturday-description').value.trim();
            const difficulty = document.getElementById('saturday-difficulty').value;
            const status = document.getElementById('saturday-status').value;
            const participants = document.getElementById('saturday-participants').value.trim();
            const photos = state.uploadedSaturdayPhotos || [];

            let hikes = getData('admin_saturday_hikes') || [];

            if (state.editingSaturdayHikeId) {
                hikes = hikes.map(h => {
                    if (h.id === state.editingSaturdayHikeId) {
                        return { ...h, destination, price, date, leader, mapLink, description, difficulty, status, participants, photos };
                    }
                    return h;
                });
                showToast('Saturday Hike updated successfully!', 'success');
            } else {
                hikes.push({
                    id: Date.now(),
                    destination,
                    price,
                    date,
                    leader,
                    mapLink,
                    description,
                    difficulty,
                    status,
                    participants,
                    photos
                });
                showToast('New Saturday Hike added!', 'success');
            }

            setData('admin_saturday_hikes', hikes);
            modalHike.style.display = 'none';
            renderAll();
        });
    }
}

function renderSaturdayPhotoThumbnails() {
    const grid = document.getElementById('saturday-modal-photo-thumbnails');
    if (!grid) return;
    grid.innerHTML = '';

    const photos = state.uploadedSaturdayPhotos || [];
    photos.forEach((p, idx) => {
        const wrapper = document.createElement('div');
        wrapper.className = 'photo-thumbnail-wrapper';
        wrapper.innerHTML = `
            <img src="${p}" alt="Preview">
            <button type="button" class="photo-thumbnail-delete" onclick="removeUploadedSaturdayPhoto(${idx})">&times;</button>
        `;
        grid.appendChild(wrapper);
    });
}

window.removeUploadedSaturdayPhoto = (idx) => {
    if (state.uploadedSaturdayPhotos) {
        state.uploadedSaturdayPhotos.splice(idx, 1);
        renderSaturdayPhotoThumbnails();
    }
};

function renderSaturdayHikesTable() {
    const hikes = getData('admin_saturday_hikes') || [];
    const tbody = document.getElementById('saturday-hikes-table-body');
    if (!tbody) return;
    tbody.innerHTML = '';

    if (hikes.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" style="text-align:center;" class="text-muted">No Saturday hikes scheduled yet.</td></tr>`;
        return;
    }

    hikes.forEach(hike => {
        const row = document.createElement('tr');
        const count = hike.photos ? hike.photos.length : 0;
        row.innerHTML = `
            <td>
                <div style="font-weight:700; color:var(--primary);">${hike.destination}</div>
                <div style="font-size:11px; color:var(--text-muted);"><i class="fa-regular fa-calendar"></i> ${hike.date}</div>
            </td>
            <td style="font-weight:600;">Rs. ${hike.price}</td>
            <td>
                <span class="badge ${hike.difficulty === 'Easy' ? 'badge-success' : hike.difficulty === 'Medium' ? 'badge-warning' : 'badge-danger'}">${hike.difficulty}</span>
                <span class="badge" style="margin-top: 4px; display: block; width: fit-content; background: ${hike.status === 'Completed' ? '#64748b' : 'var(--success)'}; color: white; font-size: 10px;">${hike.status || 'Upcoming'}</span>
            </td>
            <td style="font-weight:600;">${hike.leader}</td>
            <td style="font-size:11px; max-width:150px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${hike.participants || 'None'}</td>
            <td style="font-weight:700; color:var(--secondary);"><i class="fa-solid fa-images"></i> ${count} photos</td>
            <td>
                <div class="action-buttons">
                    <button class="btn btn-sm btn-info" onclick="openSaturdayItineraryModal(${hike.id}); return false;">Itinerary</button>
                    <button class="action-icon complete" style="color: ${hike.status === 'Completed' ? 'var(--success)' : '#94a3b8'};" onclick="toggleSaturdayHikeStatus(${hike.id})" title="${hike.status === 'Completed' ? 'Mark as Upcoming' : 'Mark as Completed'}"><i class="${hike.status === 'Completed' ? 'fa-solid fa-circle-check' : 'fa-regular fa-circle-check'}"></i></button>
                    <button class="action-icon edit" onclick="editSaturdayHike(${hike.id})"><i class="fa-solid fa-pen-to-square"></i></button>
                    <button class="action-icon delete" onclick="deleteSaturdayHike(${hike.id})"><i class="fa-solid fa-trash-can"></i></button>
                </div>
            </td>
        `;
        tbody.appendChild(row);
    });
}

window.editSaturdayHike = (id) => {
    const hikes = getData('admin_saturday_hikes') || [];
    const hike = hikes.find(h => h.id === id);
    if (!hike) return;

    state.editingSaturdayHikeId = id;
    state.uploadedSaturdayPhotos = [...(hike.photos || [])];

    document.getElementById('saturday-modal-title').textContent = 'Edit Saturday Hike';
    document.getElementById('saturday-destination').value = hike.destination;
    document.getElementById('saturday-price').value = hike.price;
    document.getElementById('saturday-date').value = hike.date;
    document.getElementById('saturday-leader').value = hike.leader;
    document.getElementById('saturday-difficulty').value = hike.difficulty;
    document.getElementById('saturday-status').value = hike.status || 'Upcoming';
    document.getElementById('saturday-participants').value = hike.participants || '';
    document.getElementById('saturday-map-link').value = hike.mapLink || '';
    document.getElementById('saturday-description').value = hike.description || '';

    renderSaturdayPhotoThumbnails();
    document.getElementById('saturday-modal').style.display = 'flex';
};

window.deleteSaturdayHike = (id) => {
    if (confirm('Are you sure you want to delete this Saturday hike?')) {
        let hikes = getData('admin_saturday_hikes') || [];
        hikes = hikes.filter(h => h.id !== id);
        setData('admin_saturday_hikes', hikes);
        showToast('Saturday Hike deleted.', 'success');
        renderAll();
    }
};

window.toggleSaturdayHikeStatus = (id) => {
    let hikes = getData('admin_saturday_hikes') || [];
    hikes = hikes.map(h => {
        if (h.id === id) {
            const newStatus = h.status === 'Completed' ? 'Upcoming' : 'Completed';
            showToast(`Hike status updated to ${newStatus}`, 'success');
            return { ...h, status: newStatus };
        }
        return h;
    });
    setData('admin_saturday_hikes', hikes);
    renderAll();
};

function renderSaturdayBookingsTable() {
    const bookings = getData('admin_saturday_bookings') || [];
    const tbody = document.getElementById('saturday-bookings-table-body');
    if (!tbody) return;
    tbody.innerHTML = '';

    if (bookings.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" style="text-align:center;" class="text-muted">No subscription bookings found.</td></tr>`;
        return;
    }

    bookings.forEach(booking => {
        const row = document.createElement('tr');
        const badgeClass = booking.status === 'Approved' ? 'badge-success' : 'badge-warning';

        let confirmBtn = '';
        if (booking.status === 'Pending') {
            confirmBtn = `<button class="btn btn-sm" onclick="approveSaturdayBooking(${booking.id})" style="background:var(--success); color:white; font-weight:700;"><i class="fa-solid fa-check"></i> Confirm</button>`;
        } else {
            confirmBtn = `<span style="font-size:12px; color:var(--success); font-weight:700;"><i class="fa-solid fa-circle-check"></i> Confirmed</span>`;
        }

        let screenshotHtml = '';
        if (booking.receipt) {
            screenshotHtml = `
                <div style="position:relative; width:45px; height:45px; border-radius:4px; border:1px solid var(--border); background:var(--bg-light); cursor:zoom-in; overflow:hidden; display:flex; align-items:center; justify-content:center;" onclick="viewHighResScreenshot('${booking.receipt}')">
                    <img src="${booking.receipt}" style="max-width:100%; max-height:100%; object-fit:cover;">
                </div>
            `;
        } else {
            screenshotHtml = `<span style="font-size:11px; color:var(--text-disabled); font-style:italic;">No slip</span>`;
        }

        // Robust contact extraction for Saturday Hikes
        let displayPhone = booking.phone || '';
        let displayEmail = booking.email || '';
        
        if (booking.contact) {
            if (booking.contact.includes('Phone:')) {
                const phoneMatch = booking.contact.match(/Phone:\s*([^\s,]+)/i);
                if (phoneMatch) displayPhone = phoneMatch[1];
                const emailMatch = booking.contact.match(/Email:\s*([^\s,]+)/i);
                if (emailMatch) displayEmail = emailMatch[1];
            } else {
                if (booking.contact.includes('@')) {
                    displayEmail = booking.contact;
                } else {
                    displayPhone = booking.contact;
                }
            }
        }

        const phoneHtml = displayPhone ? `<div style="font-size:11px; margin-top:2px; font-weight:600;"><i class="fa-solid fa-phone" style="font-size:10px; color:var(--primary); margin-right:4px;"></i>${displayPhone}</div>` : '';
        const emailHtml = displayEmail ? `<div style="font-size:11px; color:var(--text-muted);"><i class="fa-solid fa-envelope" style="font-size:10px; color:var(--text-muted); margin-right:4px;"></i>${displayEmail}</div>` : '';

        row.innerHTML = `
            <td style="font-weight:700;">${booking.subscriberName}</td>
            <td style="font-weight:600;">
                <div>${booking.targetHike}</div>
                <div style="font-size:11px; color:var(--text-muted);">${booking.pax || 1} Pax — Rs. ${(booking.amount || 0).toLocaleString()}</div>
            </td>
            <td style="font-size:12px; color:var(--text-muted);">${phoneHtml}${emailHtml}</td>
            <td>${screenshotHtml}</td>
            <td><span class="badge ${badgeClass}">${booking.status}</span></td>
            <td>
                <div class="action-buttons" style="align-items: center; gap:8px;">
                    ${confirmBtn}
                    <button class="btn btn-sm btn-danger delete-booking-btn" onclick="deleteSaturdayBooking(${booking.id})" title="Delete booking"><i class="fa-solid fa-trash-can"></i></button>
                </div>
            </td>
        `;
        tbody.appendChild(row);
    });
}

window.approveSaturdayBooking = (id) => {
    if (confirm('Confirm this Saturday hike subscription?')) {
        let bookings = getData('admin_saturday_bookings') || [];
        bookings = bookings.map(b => {
            if (b.id === id) {
                return { ...b, status: 'Approved' };
            }
            return b;
        });
        setData('admin_saturday_bookings', bookings);

        showToast('Subscription confirmed!', 'success');
        renderAll();
    }
};

window.deleteSaturdayBooking = (id) => {
    if (confirm('Delete this subscription permanently?')) {
        let bookings = getData('admin_saturday_bookings') || [];
        bookings = bookings.filter(b => b.id !== id);
        setData('admin_saturday_bookings', bookings);
        showToast('Subscription deleted.', 'success');
        renderAll();
    }
};

function setupBookingManagement() {}

function renderBookingsTable() {
    const bookings = getData('admin_bookings') || [];
    const tbody = document.getElementById('bookings-table-body');
    if (!tbody) return;
    tbody.innerHTML = '';

    // Clear screenshot store for booking keys
    Object.keys(_screenshotStore).forEach(k => {
        if (k.startsWith('booking_')) delete _screenshotStore[k];
    });

    // Render confirmed participants avatar strip at top
    const confirmedBookings = bookings.filter(b => b.status === 'Approved');
    const confirmedContainer = document.getElementById('confirmed-participants-strip');
    if (confirmedContainer) {
        if (confirmedBookings.length > 0) {
            confirmedContainer.style.display = 'block';
            let avatarsHtml = '';
            confirmedBookings.forEach(b => {
                const initial = b.clientName ? b.clientName.charAt(0).toUpperCase() : '?';
                const colors = ['#1b7a37','#00a859','#2563eb','#7c3aed','#db2777','#ea580c','#0891b2','#4f46e5'];
                const color = colors[b.clientName.charCodeAt(0) % colors.length];
                avatarsHtml += `
                    <div class="confirmed-avatar" style="background:${color};" data-fullname="${b.clientName} — ${b.trekName}">
                        ${initial}
                        <div class="confirmed-avatar-tooltip">${b.clientName}<br><span style="font-size:10px;color:#ccc;">${b.trekName} • Rs. ${b.amount}</span></div>
                    </div>`;
            });
            confirmedContainer.innerHTML = `
                <div style="display:flex; align-items:center; gap:12px; flex-wrap:wrap;">
                    <span style="font-weight:800; font-size:13px; color:var(--success);"><i class="fa-solid fa-circle-check"></i> Confirmed Participants (${confirmedBookings.length})</span>
                    <div class="confirmed-avatar-stack">${avatarsHtml}</div>
                </div>`;
        } else {
            confirmedContainer.style.display = 'none';
        }
    }

    if (bookings.length === 0) {
        tbody.innerHTML = `<tr><td colspan="8" style="text-align:center;" class="text-muted">No booking logs found.</td></tr>`;
        return;
    }

    bookings.forEach(booking => {
        const row = document.createElement('tr');
        const badgeClass = booking.status === 'Approved' ? 'badge-success' : 'badge-warning';

        // Build avatar initial for client name
        const clientInitial = booking.clientName ? booking.clientName.charAt(0).toUpperCase() : '?';
        const avatarColors = ['#1b7a37','#00a859','#2563eb','#7c3aed','#db2777','#ea580c','#0891b2','#4f46e5'];
        const avatarColor = avatarColors[booking.clientName.charCodeAt(0) % avatarColors.length];

        // Robust contact extraction
        let displayPhone = booking.phone || '';
        let displayEmail = booking.email || '';
        
        if (!displayPhone && booking.txNotes) {
            const phoneMatch = booking.txNotes.match(/phone:\s*([^\s,]+)/i);
            if (phoneMatch) displayPhone = phoneMatch[1];
        }
        if (!displayEmail && booking.txNotes) {
            const emailMatch = booking.txNotes.match(/email:\s*([^\s,]+)/i);
            if (emailMatch) displayEmail = emailMatch[1];
        }

        const phoneHtml = displayPhone ? `<div style="font-size:11px; margin-top:2px; font-weight:600;"><i class="fa-solid fa-phone" style="font-size:10px; color:var(--primary); margin-right:4px;"></i>${displayPhone}</div>` : '';
        const emailHtml = displayEmail ? `<div style="font-size:11px; color:var(--text-muted);"><i class="fa-solid fa-envelope" style="font-size:10px; color:var(--text-muted); margin-right:4px;"></i>${displayEmail}</div>` : '';

        // Store screenshot references
        const storeKey = `booking_${booking.id}`;
        if (booking.paymentScreenshot) {
            _screenshotStore[storeKey] = { url: booking.paymentScreenshot, notes: booking.txNotes || '' };
        }

        const screenshotHtml = booking.paymentScreenshot ? `
            <div style="display:flex; align-items:center; gap:8px;">
                <div style="width:36px; height:36px; border-radius:4px; border:1px solid var(--border); overflow:hidden; cursor:pointer;" data-screenshot-key="${storeKey}" class="screenshot-thumb">
                    <img src="${booking.paymentScreenshot}" style="width:100%; height:100%; object-fit:cover;">
                </div>
                <button class="btn btn-sm btn-secondary screenshot-inspect-btn" data-screenshot-key="${storeKey}" style="font-size:10px; padding:4px 8px;">Inspect</button>
            </div>
        ` : `<span style="font-size:11px; color:var(--text-disabled); font-style:italic;">No slip</span>`;

        // Match Saturday Hikes action buttons style exactly
        let confirmBtn = '';
        if (booking.status === 'Pending') {
            confirmBtn = `<button class="btn btn-sm" onclick="approveBooking(${booking.id})" style="background:var(--success); color:white; font-weight:700;"><i class="fa-solid fa-check"></i> Confirm</button>`;
        } else {
            confirmBtn = `<span style="font-size:12px; color:var(--success); font-weight:700;"><i class="fa-solid fa-circle-check"></i> Confirmed</span>`;
        }

        row.innerHTML = `
            <td>
                <div style="display:flex; align-items:center; gap:10px;">
                    <div class="confirmed-avatar" style="background:${avatarColor}; width:36px; height:36px; font-size:14px; flex-shrink:0;" data-fullname="${booking.clientName}">
                        ${clientInitial}
                        <div class="confirmed-avatar-tooltip">${booking.clientName}</div>
                    </div>
                    <div>
                        <div style="font-weight:700;">${booking.clientName}</div>
                        ${phoneHtml}
                        ${emailHtml}
                    </div>
                </div>
            </td>
            <td style="font-weight:600;">${booking.trekName}</td>
            <td style="font-weight:600; color:var(--text-muted);">${booking.date}</td>
            <td style="font-weight:800;">${booking.pax} Pax</td>
            <td style="font-weight:800;">Rs. ${booking.amount.toLocaleString()}</td>
            <td>${screenshotHtml}</td>
            <td><span class="badge ${badgeClass}">${booking.status}</span></td>
            <td>
                <div class="action-buttons" style="align-items: center; gap:8px;">
                    ${confirmBtn}
                    <button class="btn btn-sm btn-danger delete-booking-btn" data-id="${booking.id}" title="Delete booking"><i class="fa-solid fa-trash-can"></i></button>
                </div>
            </td>
        `;
        tbody.appendChild(row);
    });

    // Attach delegated event handler (only once, using a flag)
    if (!tbody.dataset.listenerAttached) {
        tbody.dataset.listenerAttached = 'true';
        tbody.addEventListener('click', (e) => {
            const thumbEl = e.target.closest('.screenshot-thumb, .screenshot-inspect-btn');
            if (thumbEl) {
                const key = thumbEl.getAttribute('data-screenshot-key');
                if (key && _screenshotStore[key]) {
                    openScreenshotModal(_screenshotStore[key].url, _screenshotStore[key].notes);
                }
                return;
            }
            const delBtn = e.target.closest('.delete-booking-btn');
            if (delBtn) {
                const id = parseInt(delBtn.getAttribute('data-id'));
                deleteBooking(id);
            }
        });
    }
}

function renderPaymentsTable() {
    const tbody = document.getElementById('payments-table-body');
    if (!tbody) return;
    tbody.innerHTML = '';

    const bookings = getData('admin_bookings') || [];
    const satBookings = getData('admin_saturday_bookings') || [];

    // Clear screenshot store
    Object.keys(_screenshotStore).forEach(k => delete _screenshotStore[k]);

    const paymentItems = [];

    bookings.forEach(b => {
        if (b.paymentScreenshot) {
            paymentItems.push({
                type: 'TREK',
                id: b.id,
                clientName: b.clientName,
                targetName: b.trekName,
                amount: b.amount,
                screenshot: b.paymentScreenshot,
                txNotes: b.txNotes,
                status: b.status
            });
        }
    });

    satBookings.forEach(sb => {
        if (sb.receipt) {
            paymentItems.push({
                type: 'SATURDAY',
                id: sb.id,
                clientName: sb.subscriberName,
                targetName: sb.targetHike + ' [Saturday Hike]',
                amount: sb.amount,
                screenshot: sb.receipt,
                txNotes: sb.txNotes,
                status: sb.status
            });
        }
    });

    if (paymentItems.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" style="text-align:center;" class="text-muted">No payment slips submitted yet.</td></tr>`;
        return;
    }

    paymentItems.forEach(item => {
        const row = document.createElement('tr');
        const badgeClass = item.status === 'Approved' ? 'badge-success' : 'badge-warning';

        const storeKey = `payment_${item.type}_${item.id}`;
        _screenshotStore[storeKey] = { url: item.screenshot, notes: item.txNotes || '' };

        const screenshotHtml = `
            <div style="display:flex; align-items:center; gap:8px;">
                <div style="width:36px; height:36px; border-radius:4px; border:1px solid var(--border); overflow:hidden; cursor:pointer;" data-screenshot-key="${storeKey}" class="screenshot-thumb">
                    <img src="${item.screenshot}" style="width:100%; height:100%; object-fit:cover;">
                </div>
                <button class="btn btn-sm btn-secondary screenshot-inspect-btn" data-screenshot-key="${storeKey}" style="font-size:10px; padding:4px 8px;">Inspect</button>
            </div>
        `;

        let actionBtn = '';
        if (item.status === 'Pending') {
            if (item.type === 'TREK') {
                actionBtn = `<button class="btn btn-sm" onclick="approveBooking(${item.id})" style="background:var(--success); color:white; font-weight:700;"><i class="fa-solid fa-check"></i> Confirm Payment</button>`;
            } else {
                actionBtn = `<button class="btn btn-sm" onclick="approveSaturdayBooking(${item.id})" style="background:var(--success); color:white; font-weight:700;"><i class="fa-solid fa-check"></i> Confirm Payment</button>`;
            }
        } else {
            actionBtn = `<span style="font-size:12px; color:var(--success); font-weight:700;"><i class="fa-solid fa-circle-check"></i> Verified</span>`;
        }

        row.innerHTML = `
            <td style="font-weight:700;">${item.clientName}</td>
            <td style="font-weight:600;">${item.targetName}</td>
            <td style="font-weight:800;">Rs. ${item.amount.toLocaleString()}</td>
            <td>${screenshotHtml}</td>
            <td style="font-size:12px; color:var(--text-muted); max-width:200px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${item.txNotes || 'No notes'}</td>
            <td><span class="badge ${badgeClass}">${item.status}</span></td>
            <td>${actionBtn}</td>
        `;
        tbody.appendChild(row);
    });

    if (!tbody.dataset.listenerAttached) {
        tbody.dataset.listenerAttached = 'true';
        tbody.addEventListener('click', (e) => {
            const thumbEl = e.target.closest('.screenshot-thumb, .screenshot-inspect-btn');
            if (thumbEl) {
                const key = thumbEl.getAttribute('data-screenshot-key');
                if (key && _screenshotStore[key]) {
                    openScreenshotModal(_screenshotStore[key].url, _screenshotStore[key].notes);
                }
            }
        });
    }
}

// Admin payment receipt inspector modals
window.openScreenshotModal = (url, notes) => {
    const modal = document.getElementById('screenshot-view-modal');
    const img = document.getElementById('screenshot-modal-img');
    const notesBox = document.getElementById('screenshot-modal-notes');

    if (modal && img && notesBox) {
        img.src = url;
        notesBox.innerHTML = `<strong>Reference Logs:</strong> ${notes || 'No registration notes provided.'}`;
        modal.style.display = 'flex';
    }
};

window.closeScreenshotModal = () => {
    document.getElementById('screenshot-view-modal').style.display = 'none';
};

window.openItineraryModal = (trekId) => {
    const treks = getData('admin_treks') || [];
    const trek = treks.find(t => t.id === trekId);
    if (!trek) return;

    window.currentItineraryTrekName = trek.name;
    document.getElementById('itinerary-modal-title').innerHTML = `<i class="fa-solid fa-map"></i> Itinerary: ${trek.name}`;
    
    const mapContainer = document.getElementById('itinerary-modal-map');
    const mapLink = document.getElementById('itinerary-map-link');
    if (trek.mapLink) {
        mapLink.href = trek.mapLink;
        mapContainer.style.display = 'block';
    } else {
        mapContainer.style.display = 'none';
    }

    // Build rich itinerary details
    const descContainer = document.getElementById('itinerary-modal-desc');
    let detailsHtml = `
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:16px;">
            <div style="background:var(--bg-light); padding:12px; border-radius:6px;">
                <div style="font-size:11px; color:var(--text-muted); font-weight:600;">Price</div>
                <div style="font-size:18px; font-weight:800; color:var(--primary);">Rs. ${trek.price}</div>
            </div>
            <div style="background:var(--bg-light); padding:12px; border-radius:6px;">
                <div style="font-size:11px; color:var(--text-muted); font-weight:600;">Duration</div>
                <div style="font-size:18px; font-weight:800; color:var(--text-primary);">${trek.duration}</div>
            </div>
            <div style="background:var(--bg-light); padding:12px; border-radius:6px;">
                <div style="font-size:11px; color:var(--text-muted); font-weight:600;">Difficulty</div>
                <div style="font-size:14px; font-weight:700;">${trek.difficulty === 'Easy' ? '🟢 Easy Trail' : trek.difficulty === 'Medium' ? '🟡 Moderate' : '🔴 Hard'}</div>
            </div>
            <div style="background:var(--bg-light); padding:12px; border-radius:6px;">
                <div style="font-size:11px; color:var(--text-muted); font-weight:600;">Leader</div>
                <div style="font-size:14px; font-weight:700; color:var(--text-primary);">${trek.leader || 'TBA'}</div>
            </div>
        </div>
        <div style="font-weight:800; font-size:14px; color:var(--primary); margin-bottom:8px;"><i class="fa-solid fa-route"></i> Route Description & Itinerary</div>
        <div style="font-size:13px; color:var(--text-primary); line-height:1.8; white-space:pre-wrap; background:#fafafa; padding:16px; border-radius:6px; border:1px solid var(--border);">
${trek.description || 'No detailed itinerary or description provided for this route yet. The admin can add route descriptions, waypoints, and location details from the Trek Management panel.'}
        </div>`;

    // Show photos if available
    if (trek.photos && trek.photos.length > 0) {
        detailsHtml += `<div style="font-weight:800; font-size:14px; color:var(--primary); margin-top:16px; margin-bottom:8px;"><i class="fa-solid fa-images"></i> Route Photos (${trek.photos.length})</div>
        <div style="display:flex; gap:8px; overflow-x:auto; padding-bottom:4px;">`;
        trek.photos.forEach(p => {
            detailsHtml += `<img src="${p}" style="height:80px; width:120px; object-fit:cover; border-radius:6px; border:1px solid var(--border); cursor:pointer; flex-shrink:0;" onclick="openPhotoOverlay('${p}')">`;
        });
        detailsHtml += `</div>`;
    }

    descContainer.innerHTML = detailsHtml;

    document.getElementById('itinerary-modal').style.display = 'flex';
};

window.closeItineraryModal = () => {
    document.getElementById('itinerary-modal').style.display = 'none';
};

// Dynamically populate public itinerary dropdown menu from admin treks
function populatePublicItineraryMenu() {
    const menuContainer = document.querySelector('.nested-itineraries-menu');
    if (!menuContainer) return;
    
    const treks = getData('admin_treks') || [];
    menuContainer.innerHTML = '';
    
    if (treks.length === 0) {
        menuContainer.innerHTML = '<span style="padding:8px 12px; font-size:11px; color:var(--text-muted);">No treks available</span>';
        return;
    }
    
    treks.forEach(t => {
        const link = document.createElement('a');
        link.href = '#';
        link.textContent = t.name;
        link.onclick = function(e) {
            e.preventDefault();
            openItineraryModal(t.id);
        };
        menuContainer.appendChild(link);
    });
}

// Admin conforms booking payment
window.approveBooking = (id) => {
    if (confirm('Are you sure you want to confirm this booking payment? This will activate the client departure status.')) {
        let bookings = getData('admin_bookings') || [];
        bookings = bookings.map(b => {
            if (b.id === id) {
                return { ...b, status: 'Approved' };
            }
            return b;
        });
        setData('admin_bookings', bookings);

        showToast('Payment confirmed successfully! Departure activated.', 'success');
        renderAll();
    }
};

window.deleteBooking = (id) => {
    if (confirm('Delete this booking permanently?')) {
        let bookings = getData('admin_bookings') || [];
        bookings = bookings.filter(b => b.id !== id);
        setData('admin_bookings', bookings);
        showToast('Booking deleted successfully.', 'success');
        renderAll();
    }
};

// --- EXCEL EXPORT FOR BOOKINGS ---
window.downloadBookingsExcel = () => {
    const bookings = getData('admin_bookings') || [];
    if (bookings.length === 0) {
        showToast('No booking data to export.', 'danger');
        return;
    }

    // Build CSV content (Excel-compatible)
    const headers = ['#', 'Client Name', 'Trek Name', 'Departure Date', 'Pax Count', 'Amount (Rs.)', 'Status', 'Payment Notes'];
    const rows = bookings.map((b, i) => [
        i + 1,
        `"${b.clientName || ''}"`,
        `"${b.trekName || ''}"`,
        `"${b.date || ''}"`,
        b.pax || 0,
        b.amount || 0,
        `"${b.status || 'Pending'}"`,
        `"${(b.txNotes || '').replace(/"/g, "'")}"`,
    ]);

    const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const blob = new Blob(['\uFEFF' + csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `TrekWithKaushal_Bookings_${new Date().toISOString().slice(0,10)}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    showToast('Bookings exported to Excel (CSV) successfully!', 'success');
};

// --- LOGO & CONTENT MANAGER MODULE ---
function updateContentSaveButton() {
    const btn = document.querySelector('#content-form button[type="submit"]');
    if (!btn) return;
    if (state.activeCompressions > 0) {
        btn.disabled = true;
        btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin" style="margin-right: 8px;"></i> Compressing ${state.activeCompressions} images...`;
        btn.style.opacity = '0.7';
    } else {
        btn.disabled = false;
        btn.innerHTML = `<i class="fa-solid fa-cloud-arrow-up" style="margin-right: 8px;"></i> Save Brand Content Changes`;
        btn.style.opacity = '1';
    }
}

function setupContentManagement() {
    const form = document.getElementById('content-form');

    const textInputs = ['edit-logo-name', 'edit-hero-title', 'edit-hero-desc', 'edit-hero-btn'];
    textInputs.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.addEventListener('input', updateLivePreview);
    });


    const logoFileInput = document.getElementById('edit-logo-file');
    const logoPreviewBox = document.getElementById('logo-preview-box');
    if (logoFileInput) {
        logoFileInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                state.logoDeleted = false;
                state.activeCompressions++;
                updateContentSaveButton();
                const reader = new FileReader();
                reader.onload = (event) => {
                    compressImage(event.target.result, 150, 0.6, (compressedDataUrl) => {
                        state.uploadedLogoImg = compressedDataUrl;
                        if (logoPreviewBox) {
                            logoPreviewBox.innerHTML = `<img src="${compressedDataUrl}" style="max-width:100%; max-height:100%; object-fit:contain; border-radius:3px;">`;
                        }
                        updateLivePreview();
                        state.activeCompressions--;
                        updateContentSaveButton();
                    });
                };
                reader.readAsDataURL(file);
            }
        });
    }

    const deleteLogoBtn = document.getElementById('delete-logo-btn');
    if (deleteLogoBtn) {
        deleteLogoBtn.addEventListener('click', () => {
            state.uploadedLogoImg = '';
            state.logoDeleted = true;
            if (logoFileInput) logoFileInput.value = '';
            if (logoPreviewBox) {
                logoPreviewBox.innerHTML = `<i class="fa-solid fa-image" style="color: var(--text-disabled);"></i>`;
            }
            updateLivePreview();
            showToast('Logo marked for removal. Click Save changes below to apply.', 'info');
        });
    }

    const qrFileInput = document.getElementById('edit-qr-file');
    const qrPreviewBox = document.getElementById('qr-preview-box');
    if (qrFileInput) {
        qrFileInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                state.activeCompressions++;
                updateContentSaveButton();
                const reader = new FileReader();
                reader.onload = (event) => {
                    compressImage(event.target.result, 300, 0.6, (compressedDataUrl) => {
                        state.uploadedQrImg = compressedDataUrl;
                        if (qrPreviewBox) {
                            qrPreviewBox.innerHTML = `<img src="${compressedDataUrl}" style="max-width:100%; max-height:100%; object-fit:contain; border-radius:3px;">`;
                        }
                        state.activeCompressions--;
                        updateContentSaveButton();
                    });
                };
                reader.readAsDataURL(file);
            }
        });
    }
    const heroPhotosInput = document.getElementById('edit-hero-photos');
    if (heroPhotosInput) {
        heroPhotosInput.addEventListener('change', (e) => {
            state.uploadedHeroPhotos = [];
            state.heroPhotosDeleted = false;
            const files = Array.from(e.target.files);
            const previewBox = document.getElementById('hero-photos-preview-box');
            if (previewBox) previewBox.innerHTML = '';
            files.forEach(file => {
                state.activeCompressions++;
                updateContentSaveButton();
                const reader = new FileReader();
                reader.onload = (event) => {
                    compressImage(event.target.result, 350, 0.5, (compressedDataUrl) => {
                        state.uploadedHeroPhotos.push(compressedDataUrl);
                        if (previewBox) {
                            previewBox.innerHTML += `<img src="${compressedDataUrl}" style="height:60px; width:100px; object-fit:cover; border-radius:3px; border: 1px solid var(--border);">`;
                        }
                        state.activeCompressions--;
                        updateContentSaveButton();
                    });
                };
                reader.readAsDataURL(file);
            });
            showToast(`${files.length} hero photos selected`, 'success');
        });
    }

    const clearHeroPhotosBtn = document.getElementById('clear-hero-photos-btn');
    const heroPhotosPreview = document.getElementById('hero-photos-preview-box');
    if (clearHeroPhotosBtn) {
        clearHeroPhotosBtn.addEventListener('click', () => {
            state.uploadedHeroPhotos = [];
            state.heroPhotosDeleted = true;
            if (heroPhotosInput) heroPhotosInput.value = '';
            if (heroPhotosPreview) {
                heroPhotosPreview.innerHTML = '<span style="font-size:11px; color:var(--text-disabled); padding: 8px 0;"><i class="fa-solid fa-eraser"></i> Gallery Cleared (Default will show)</span>';
            }
            showToast('Hero photo strip marked for clearing. Click Save changes below to apply.', 'info');
        });
    }

    const heroBgInput = document.getElementById('edit-hero-bg');
    const heroBgPreviewBox = document.getElementById('hero-bg-preview-box');
    if (heroBgInput) {
        heroBgInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                state.heroBgDeleted = false;
                state.activeCompressions++;
                updateContentSaveButton();
                const reader = new FileReader();
                reader.onload = (event) => {
                    compressImage(event.target.result, 1000, 0.6, (compressedDataUrl) => {
                        state.uploadedHeroBg = compressedDataUrl;
                        if (heroBgPreviewBox) {
                            heroBgPreviewBox.innerHTML = `<img src="${compressedDataUrl}" style="max-width:100%; max-height:100%; object-fit:contain; border-radius:3px;">`;
                        }
                        state.activeCompressions--;
                        updateContentSaveButton();
                    });
                };
                reader.readAsDataURL(file);
            }
        });
    }

    const deleteHeroBgBtn = document.getElementById('delete-hero-bg-btn');
    if (deleteHeroBgBtn) {
        deleteHeroBgBtn.addEventListener('click', () => {
            state.uploadedHeroBg = '';
            state.heroBgDeleted = true;
            if (heroBgInput) heroBgInput.value = '';
            if (heroBgPreviewBox) {
                heroBgPreviewBox.innerHTML = `<i class="fa-solid fa-image" style="color: var(--text-disabled);"></i>`;
            }
            showToast('Hero background photo marked for removal. Click Save changes below to apply.', 'info');
        });
    }

    const passwordForm = document.getElementById('admin-password-form');
    if (passwordForm) {
        passwordForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const newPassword = document.getElementById('edit-admin-password').value.trim();
            if (newPassword.length < 5) {
                showToast('Password must be at least 5 characters.', 'danger');
                return;
            }
            localStorage.setItem('admin_password', newPassword);
            showToast('Admin password updated successfully!', 'success');
            document.getElementById('edit-admin-password').value = '';
        });
    }

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const logoName = document.getElementById('edit-logo-name').value.trim();
            const heroTitle = document.getElementById('edit-hero-title').value.trim();
            const heroDesc = document.getElementById('edit-hero-desc').value.trim();
            const heroBtn = document.getElementById('edit-hero-btn').value.trim();

            const dashTitle = document.getElementById('edit-dash-title').value.trim();
            const stat1Val = document.getElementById('edit-stat1-val').value.trim();
            const stat1Lbl = document.getElementById('edit-stat1-lbl').value.trim();
            const stat2Val = document.getElementById('edit-stat2-val').value.trim();
            const stat2Lbl = document.getElementById('edit-stat2-lbl').value.trim();

            const socialInstagram = document.getElementById('edit-social-instagram').value.trim();
            const socialTiktok = document.getElementById('edit-social-tiktok').value.trim();
            const socialFacebook = document.getElementById('edit-social-facebook').value.trim();
            const socialWhatsapp = document.getElementById('edit-social-whatsapp').value.trim();
            const socialYoutube = document.getElementById('edit-social-youtube').value.trim();

            const bankName = document.getElementById('edit-bank-name').value.trim();
            const bankAccount = document.getElementById('edit-bank-acc').value.trim();
            const bankAccountName = document.getElementById('edit-bank-holder').value.trim();

            if (!logoName || !heroTitle || !heroDesc || !heroBtn || !dashTitle || !stat1Val || !stat1Lbl || !stat2Val || !stat2Lbl) {
                showToast('Please fill out all mandatory fields.', 'danger');
                return;
            }

            const oldContent = getData('admin_content') || DEFAULT_CONTENT;
            
            const logoImg = state.logoDeleted ? '' : (state.uploadedLogoImg || oldContent.logoImg || '');
            const qrImg = state.uploadedQrImg || oldContent.qrImg || '';
            const heroBg = state.heroBgDeleted ? '' : (state.uploadedHeroBg || oldContent.heroBg || '');
            const heroPhotos = state.heroPhotosDeleted ? [] : ((state.uploadedHeroPhotos && state.uploadedHeroPhotos.length > 0) ? state.uploadedHeroPhotos : (oldContent.heroPhotos || []));

            const newContent = { 
                logoName, logoIcon: 'mountain', logoImg, heroTitle, heroDesc, heroBtn,
                dashTitle, stat1Val, stat1Lbl, stat2Val, stat2Lbl,
                socialInstagram, socialTiktok, socialFacebook, socialWhatsapp, socialYoutube,
                bankName, bankAccount, bankAccountName, qrImg, heroBg, heroPhotos
            };
            if (!setData('admin_content', newContent)) return;

            // Clear temporary state uploads
            state.uploadedLogoImg = '';
            state.logoDeleted = false;
            state.uploadedQrImg = '';
            state.uploadedHeroBg = '';
            state.heroBgDeleted = false;
            state.uploadedHeroPhotos = [];
            state.heroPhotosDeleted = false;
            
            // Clear file input values
            if (logoFileInput) logoFileInput.value = '';
            if (qrFileInput) qrFileInput.value = '';
            if (heroBgInput) heroBgInput.value = '';
            const heroPhotosInputEl = document.getElementById('edit-hero-photos');
            if (heroPhotosInputEl) heroPhotosInputEl.value = '';

            showToast('Content modifications saved successfully!', 'success');
            
            // Navigate back to Dashboard (Overview Hub)
            state.currentTab = 'dashboard';
            document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
            const dashNav = document.querySelector('.nav-item[data-tab="dashboard"]');
            if (dashNav) dashNav.classList.add('active');
            
            document.querySelectorAll('.tab-panel').forEach(panel => panel.classList.remove('active'));
            const dashPanel = document.getElementById('dashboard-panel');
            if (dashPanel) dashPanel.classList.add('active');

            renderAll();
        });
    }
}

function renderContentFields() {
    const content = getData('admin_content') || DEFAULT_CONTENT;

    document.getElementById('edit-logo-name').value = content.logoName;
    document.getElementById('edit-hero-title').value = content.heroTitle;
    document.getElementById('edit-hero-desc').value = content.heroDesc;
    document.getElementById('edit-hero-btn').value = content.heroBtn;

    document.getElementById('edit-dash-title').value = content.dashTitle || 'Trek Control Panel';
    document.getElementById('edit-stat1-val').value = content.stat1Val || '10 Active';
    document.getElementById('edit-stat1-lbl').value = content.stat1Lbl || 'Premium Expedition Trails';
    document.getElementById('edit-stat2-val').value = content.stat2Val || '24 / 7';
    document.getElementById('edit-stat2-lbl').value = content.stat2Lbl || 'Mountain Guide Assistance';

    // Social Media Links
    document.getElementById('edit-social-instagram').value = content.socialInstagram || '';
    document.getElementById('edit-social-tiktok').value = content.socialTiktok || '';
    document.getElementById('edit-social-facebook').value = content.socialFacebook || '';
    document.getElementById('edit-social-whatsapp').value = content.socialWhatsapp || '';
    document.getElementById('edit-social-youtube').value = content.socialYoutube || '';

    // Bank Details & QR
    document.getElementById('edit-bank-name').value = content.bankName || '';
    document.getElementById('edit-bank-acc').value = content.bankAccount || '';
    document.getElementById('edit-bank-holder').value = content.bankAccountName || '';

    // Render image previews if they exist
    const logoPreview = document.getElementById('logo-preview-box');
    if (logoPreview) {
        if (content.logoImg) {
            logoPreview.innerHTML = `<img src="${content.logoImg}" style="max-width:100%; max-height:100%; object-fit:contain; border-radius:3px;">`;
        } else {
            logoPreview.innerHTML = `<i class="fa-solid fa-image" style="color: var(--text-disabled);"></i>`;
        }
    }

    const qrPreview = document.getElementById('qr-preview-box');
    if (qrPreview) {
        if (content.qrImg) {
            qrPreview.innerHTML = `<img src="${content.qrImg}" style="max-width:100%; max-height:100%; object-fit:contain; border-radius:3px;">`;
        } else {
            qrPreview.innerHTML = `<i class="fa-solid fa-qrcode" style="color: var(--text-disabled); font-size: 24px;"></i>`;
        }
    }

    const heroBgPreview = document.getElementById('hero-bg-preview-box');
    if (heroBgPreview) {
        if (content.heroBg) {
            heroBgPreview.innerHTML = `<img src="${content.heroBg}" style="max-width:100%; max-height:100%; object-fit:contain; border-radius:3px;">`;
        } else {
            heroBgPreview.innerHTML = `<i class="fa-solid fa-image" style="color: var(--text-disabled);"></i>`;
        }
    }

    const heroPhotosPreview = document.getElementById('hero-photos-preview-box');
    if (heroPhotosPreview) {
        heroPhotosPreview.innerHTML = '';
        if (content.heroPhotos && content.heroPhotos.length > 0) {
            content.heroPhotos.forEach(p => {
                heroPhotosPreview.innerHTML += `<img src="${p}" style="height:60px; width:100px; object-fit:cover; border-radius:3px; border: 1px solid var(--border);">`;
            });
        }
    }

    updateLivePreview();
}

function updateLivePreview() {
    const logoName = document.getElementById('edit-logo-name').value;
    const heroTitle = document.getElementById('edit-hero-title').value;
    const heroDesc = document.getElementById('edit-hero-desc').value;
    const heroBtn = document.getElementById('edit-hero-btn').value;

    document.getElementById('prev-logo-text').textContent = logoName;
    document.getElementById('prev-hero-title').textContent = heroTitle;
    document.getElementById('prev-hero-desc').textContent = heroDesc;
    document.getElementById('prev-hero-btn').textContent = heroBtn;

    const prevLogoIconContainer = document.getElementById('prev-logo-icon-container');
    if (prevLogoIconContainer) {
        if (state.uploadedLogoImg) {
            prevLogoIconContainer.innerHTML = `<img src="${state.uploadedLogoImg}" style="width:20px; height:20px; object-fit:contain; border-radius:3px;">`;
        } else {
            const content = getData('admin_content') || DEFAULT_CONTENT;
            if (content.logoImg) {
                prevLogoIconContainer.innerHTML = `<img src="${content.logoImg}" style="width:20px; height:20px; object-fit:contain; border-radius:3px;">`;
            } else {
                prevLogoIconContainer.innerHTML = `<i id="prev-logo-icon" class="fa-solid fa-mountain"></i>`;
            }
        }
    }
}

// --- TESTIMONIAL FEEDBACK MODULE ---
function setupFeedbackManagement() {
    const feedbackForm = document.getElementById('mock-feedback-form');
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('fb-username').value.trim();
            const rating = parseInt(document.getElementById('fb-rating').value);
            const comment = document.getElementById('fb-comment').value.trim();

            if (!name || isNaN(rating) || !comment) {
                showToast('Please fill out all fields', 'danger');
                return;
            }

            const feedbacks = getData('admin_feedbacks') || [];
            const newFb = {
                id: Date.now(),
                name,
                rating,
                comment,
                status: 'Pending'
            };

            feedbacks.push(newFb);
            setData('admin_feedbacks', feedbacks);
            
            feedbackForm.reset();
            showToast('Feedback submitted to queue for moderation!', 'success');
            
            renderAll();
        });
    }
}

function renderFeedbackList() {
    const feedbacks = getData('admin_feedbacks') || [];
    const container = document.getElementById('feedback-grid-container');
    container.innerHTML = '';

    const logged = isAdmin();
    const visibleFeedbacks = logged ? feedbacks : feedbacks.filter(f => f.status === 'Approved');

    if (visibleFeedbacks.length === 0) {
        container.innerHTML = `<div style="text-align:center; padding: 40px;" class="text-muted">No testimonials found.</div>`;
        return;
    }

    visibleFeedbacks.forEach(fb => {
        const card = document.createElement('div');
        card.className = 'panel-card animate-slide-in';
        card.style.padding = '24px';
        card.style.margin = '0 0 16px';
        
        const badgeClass = fb.status === 'Approved' ? 'badge-success' : 'badge-warning';
        
        let starsHtml = '';
        for (let i = 1; i <= 5; i++) {
            starsHtml += i <= fb.rating ? `<i class="fa-solid fa-star" style="color:var(--warning); margin-right:2px;"></i>` : `<i class="fa-regular fa-star" style="color:var(--text-disabled); margin-right:2px;"></i>`;
        }

        const badgeHtml = logged ? `<span class="badge ${badgeClass}" style="float:right;">${fb.status}</span>` : '';
        
        let actionBtnHtml = '';
        if (logged) {
            const toggleBtn = fb.status === 'Pending' 
                ? `<button class="btn btn-sm btn-secondary" onclick="approveFeedback(${fb.id})"><i class="fa-solid fa-circle-check"></i> Approve</button>`
                : `<button class="btn btn-sm btn-secondary" onclick="rejectFeedback(${fb.id})"><i class="fa-solid fa-circle-xmark"></i> Hide</button>`;
            
            actionBtnHtml = `
                <div class="feedback-actions" style="margin-top:16px; border-top:1px solid var(--border); padding-top:12px; display:flex; gap:10px;">
                    ${toggleBtn}
                    <button class="btn btn-sm btn-danger" onclick="deleteFeedback(${fb.id})"><i class="fa-solid fa-trash-can"></i> Delete</button>
                </div>
            `;
        }

        card.innerHTML = `
            ${badgeHtml}
            <div style="margin-bottom:12px;">${starsHtml}</div>
            <p style="font-size:13px; line-height:1.6; font-style:italic; margin-bottom:16px; color:var(--text-primary);">"${fb.comment}"</p>
            <div class="feedback-user" style="display:flex; align-items:center; gap:10px;">
                <div class="feedback-avatar" style="width:28px; height:28px; background:var(--primary); font-size:11px; border-radius:50%; display:flex; align-items:center; justify-content:center; color:white; font-weight:800;">${fb.name.charAt(0)}</div>
                <div>
                    <h4 style="font-size:12px; font-weight:700;">${fb.name}</h4>
                    <p style="font-size:9px; color:var(--text-muted);">Verified Customer</p>
                </div>
            </div>
            ${actionBtnHtml}
        `;
        container.appendChild(card);
    });
}

window.approveFeedback = (id) => {
    let feedbacks = getData('admin_feedbacks') || [];
    feedbacks = feedbacks.map(f => {
        if (f.id === id) {
            return { ...f, status: 'Approved' };
        }
        return f;
    });
    setData('admin_feedbacks', feedbacks);
    showToast('Feedback approved & displayed live!', 'success');
    renderAll();
};

window.rejectFeedback = (id) => {
    let feedbacks = getData('admin_feedbacks') || [];
    feedbacks = feedbacks.map(f => {
        if (f.id === id) {
            return { ...f, status: 'Pending' };
        }
        return f;
    });
    setData('admin_feedbacks', feedbacks);
    showToast('Feedback hidden from live display.', 'success');
    renderAll();
};

window.deleteFeedback = (id) => {
    if (confirm('Delete this feedback permanently?')) {
        let feedbacks = getData('admin_feedbacks') || [];
        feedbacks = feedbacks.filter(f => f.id !== id);
        setData('admin_feedbacks', feedbacks);
        showToast('Feedback removed permanently', 'success');
        renderAll();
    }
};

function setupSaturdayPageBlocksManagement() {
    const addBtn = document.getElementById('btn-add-saturday-block');
    const modal = document.getElementById('saturday-block-modal');
    const closeBtn = document.getElementById('btn-saturday-block-close');
    const form = document.getElementById('saturday-block-form');
    const photoInput = document.getElementById('saturday-block-photo');
    const photoPreview = document.getElementById('saturday-block-photo-preview');

    if (addBtn) {
        addBtn.addEventListener('click', () => {
            state.editingSaturdayBlockId = null;
            state.uploadedSaturdayBlockPhoto = '';
            document.getElementById('saturday-block-modal-title').textContent = 'Add Page Block';
            form.reset();
            photoPreview.innerHTML = '';
            modal.style.display = 'flex';
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    if (photoInput) {
        photoInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    compressImage(event.target.result, 800, 0.7, (compressedDataUrl) => {
                        state.uploadedSaturdayBlockPhoto = compressedDataUrl;
                        photoPreview.innerHTML = `<img src="${compressedDataUrl}" style="max-width:100%; border-radius:4px;">`;
                    });
                };
                reader.readAsDataURL(file);
            }
        });
    }

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const text = document.getElementById('saturday-block-text').value;

            if (!text && !state.uploadedSaturdayBlockPhoto) {
                showToast('Please provide text or photo', 'danger');
                return;
            }

            let blocks = getData('admin_saturday_page_blocks') || [];

            if (state.editingSaturdayBlockId) {
                blocks = blocks.map(b => {
                    if (b.id === state.editingSaturdayBlockId) {
                        return { ...b, photo: state.uploadedSaturdayBlockPhoto, text };
                    }
                    return b;
                });
                showToast('Block updated successfully!', 'success');
            } else {
                const newBlock = {
                    id: Date.now(),
                    photo: state.uploadedSaturdayBlockPhoto,
                    text
                };
                blocks.push(newBlock);
                showToast('New block added!', 'success');
            }

            setData('admin_saturday_page_blocks', blocks);
            modal.style.display = 'none';
            renderAll();
        });
    }
}

function renderSaturdayBlocksTable() {
    const blocks = getData('admin_saturday_page_blocks') || [];
    const tbody = document.getElementById('saturday-blocks-table-body');
    if (!tbody) return;
    
    tbody.innerHTML = '';

    if (blocks.length === 0) {
        tbody.innerHTML = `<tr><td colspan="3" style="text-align:center;" class="text-muted">No content blocks found.</td></tr>`;
        return;
    }

    blocks.forEach((block, idx) => {
        const row = document.createElement('tr');
        
        const photoHtml = block.photo ? `<img src="${block.photo}" style="width:60px; height:60px; object-fit:cover; border-radius:4px;">` : `<span class="text-muted">No Photo</span>`;
        
        row.innerHTML = `
            <td>${photoHtml}</td>
            <td style="max-width: 300px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${block.text.substring(0, 100)}...</td>
            <td>
                <div class="action-buttons">
                    <button class="action-icon edit" onclick="editSaturdayBlock(${block.id})"><i class="fa-solid fa-pen-to-square"></i></button>
                    <button class="action-icon delete" onclick="deleteSaturdayBlock(${block.id})"><i class="fa-solid fa-trash-can"></i></button>
                </div>
            </td>
        `;
        tbody.appendChild(row);
    });
}

window.editSaturdayBlock = (id) => {
    const blocks = getData('admin_saturday_page_blocks') || [];
    const b = blocks.find(item => item.id === id);
    if (!b) return;

    state.editingSaturdayBlockId = id;
    state.uploadedSaturdayBlockPhoto = b.photo || '';
    
    document.getElementById('saturday-block-modal-title').textContent = 'Edit Page Block';
    document.getElementById('saturday-block-text').value = b.text;
    
    const photoPreview = document.getElementById('saturday-block-photo-preview');
    if (b.photo) {
        photoPreview.innerHTML = `<img src="${b.photo}" style="max-width:100%; border-radius:4px;">`;
    } else {
        photoPreview.innerHTML = '';
    }
    
    document.getElementById('saturday-block-modal').style.display = 'flex';
};

window.deleteSaturdayBlock = (id) => {
    if (confirm('Delete this content block?')) {
        let blocks = getData('admin_saturday_page_blocks') || [];
        blocks = blocks.filter(b => b.id !== id);
        setData('admin_saturday_page_blocks', blocks);
        showToast('Block deleted', 'success');
        renderAll();
    }
};

function renderSaturdayPublicPage() {
    const blocks = getData('admin_saturday_page_blocks') || [];
    const hikes = getData('admin_saturday_hikes') || [];
    const container = document.getElementById('saturday-public-content-container');
    if (!container) return;

    let html = '<div style="max-width: 1000px; margin: 0 auto; display: flex; flex-direction: column; gap: 40px;">';

    const upcomingHikes = hikes.filter(h => h.status !== 'Completed');
    const completedHikes = hikes.filter(h => h.status === 'Completed');

    // 1. UPCOMING SATURDAY HIKES SECTOR (PREMIUM VISUAL CARDS)
    html += `
    <div class="saturday-hikes-section" style="margin-bottom: 20px;">
        <div style="text-align: center; margin-bottom: 28px;">
            <h2 style="font-size: 26px; font-weight: 800; color: var(--primary); display: inline-flex; align-items: center; gap: 8px;">
                <i class="fa-solid fa-calendar-check"></i> Upcoming Saturday Subscription Hikes
            </h2>
            <p class="text-muted" style="font-size: 13px; margin-top: 6px;">Select and register for upcoming weekend hikes. Limited slots available!</p>
        </div>
    `;

    const buildHikeCardsHtml = (hikeList, isCompleted = false) => {
        if (hikeList.length === 0) {
            return `
            <div class="panel-card animate-slide-in" style="text-align: center; padding: 40px 20px; border: 1px dashed var(--border); background: var(--bg-light); margin-bottom: 24px;">
                <i class="fa-solid fa-person-hiking" style="font-size: 42px; color: var(--text-disabled); margin-bottom: 12px; display: block;"></i>
                <h4 style="font-weight: 800; color: var(--text-primary); font-size: 14px;">No Hikes in this Category</h4>
                <p class="text-muted" style="font-size: 11px; margin-top: 4px;">Check back later for updates.</p>
            </div>
            `;
        }

        let cardsHtml = `<div class="trek-cards-container" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 24px; margin-bottom: 24px;">`;

        hikeList.forEach(hike => {
            const roster = parseParticipants(hike.participants);
            
            // Overlapping bubble stack for Saturday participants
            let bubbleHtml = '<div class="avatar-stack">';
            const maxVisible = 6;
            const visibleMembers = roster.members.slice(0, maxVisible);
            
            visibleMembers.forEach(mem => {
                let colorClass = mem.gender === 'F' ? 'avatar-f' : (mem.gender === 'M' ? 'avatar-m' : '');
                bubbleHtml += `
                    <div class="avatar-bubble confirmed-avatar ${colorClass}" style="width:28px; height:28px; font-size:11px;">
                        ${mem.initial}
                        <div class="confirmed-avatar-tooltip">${mem.name}</div>
                    </div>`;
            });

            if (roster.members.length > maxVisible) {
                bubbleHtml += `<div class="avatar-bubble more-bubble confirmed-avatar" style="width:28px; height:28px; font-size:11px; background:#e2e8f0; color:#475569; border-color:#fff;">+${roster.members.length - maxVisible}</div>`;
            }
            bubbleHtml += '</div>';

            const rosterStatsHtml = `<span class="gender-counts" style="margin-left: 6px;">M ${roster.male} F ${roster.female} T ${roster.total}</span>`;

            let difficultyBadge = '';
            if (hike.difficulty === 'Easy') difficultyBadge = '<span class="badge badge-success">🟢 Easy</span>';
            else if (hike.difficulty === 'Medium') difficultyBadge = '<span class="badge badge-warning">🟡 Moderate</span>';
            else difficultyBadge = '<span class="badge badge-danger">🔴 Hard</span>';

            // Photos scrolling list - fallback to Unsplash trail photos if empty
            const photos = (hike.photos && hike.photos.length > 0) ? hike.photos : [
                'https://images.unsplash.com/photo-1551632879-25b2d34a90d6?q=80&w=600',
                'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=600'
            ];
            
            let photosHtml = '<div class="trek-card-photos">';
            photos.forEach(p => {
                photosHtml += `
                    <div class="trek-card-photo" onclick="openPhotoOverlay('${p}')">
                        <img src="${p}" alt="Saturday Hike photo">
                    </div>`;
            });
            photosHtml += '</div>';

            let actionHtml = '';
            if (isCompleted) {
                actionHtml = `<span class="badge" style="background:#475569; color:#fff; font-weight:700; font-size:10px; padding: 8px 12px; border-radius:4px; display:inline-flex; align-items:center; gap:4px; width:100%; justify-content:center;"><i class="fa-solid fa-circle-check"></i> Hike Completed Successfully</span>`;
            } else {
                actionHtml = `
                    <button class="btn btn-sm" onclick="openSaturdayItineraryModal(${hike.id}); return false;" style="flex: 1; font-size:10px; padding: 6px; background: var(--bg-light); border: 1px solid var(--border); color: var(--text-primary); font-weight: 700;">Itinerary &amp; Map</button>
                    <button class="btn btn-sm" onclick="selectSaturdayItinerary(${hike.id}, '${hike.destination.replace(/'/g, "\\'")}'); return false;" style="flex: 1; font-weight:800; background:var(--primary); color:#fff; font-size:10px; padding: 6px;">SUBSCRIBE</button>
                `;
            }

            cardsHtml += `
            <div class="trek-roster-card animate-slide-in" style="display: flex; flex-direction: column; justify-content: space-between;">
                <div>
                    <div class="trek-card-header" style="margin-bottom: 12px;">
                        <div class="trek-card-info">
                            <h4 style="font-size: 15px; font-weight: 800; color: var(--primary); display: flex; align-items: center; gap: 6px;">
                                <i class="fa-solid fa-person-hiking"></i> ${hike.destination}
                            </h4>
                            <div class="trek-card-meta" style="margin-top: 6px; display: flex; flex-wrap: wrap; gap: 8px; font-size: 11px;">
                                <span><i class="fa-regular fa-calendar"></i> ${hike.date || 'Saturday'}</span>
                                <span><i class="fa-solid fa-tags"></i> Rs. ${hike.price}</span>
                                <span>${difficultyBadge}</span>
                                <span><i class="fa-solid fa-user-tie"></i> ${hike.leader || 'Sundar'}</span>
                            </div>
                        </div>
                    </div>
                    ${photosHtml}
                    <div style="font-size: 12px; color: var(--text-muted); line-height: 1.6; margin: 12px 0; min-height: 38px;">
                        ${hike.description ? (hike.description.length > 100 ? hike.description.substring(0, 95) + '...' : hike.description) : 'Explore scenic ridges, high altitude chiya spots, and dense forest canopy trails with Kaushal.'}
                    </div>
                </div>
                <div>
                    <div style="display: flex; gap: 8px; border-top: 1px solid var(--border); padding-top: 12px; margin-top: 8px;">
                        ${actionHtml}
                    </div>
                    <div class="trek-card-footer" style="margin-top: 10px; padding-top: 8px; border-top: 1px dashed var(--border); display: flex; justify-content: space-between; align-items: center;">
                        <div style="display: flex; align-items: center; gap: 4px;">
                            ${bubbleHtml}
                            ${rosterStatsHtml}
                        </div>
                        <div style="font-size:10px; color:var(--text-muted); white-space: nowrap;">
                            <i class="fa-solid fa-images"></i> ${photos.length} photo${photos.length !== 1 ? 's' : ''}
                        </div>
                    </div>
                </div>
            </div>
            `;
        });

        cardsHtml += `</div>`;
        return cardsHtml;
    };

    html += buildHikeCardsHtml(upcomingHikes, false);
    html += `</div>`;

    // 2. COMPLETED SATURDAY HIKES SECTOR (ARCHIVE)
    html += `
    <div class="saturday-hikes-section" style="margin-top: 20px; margin-bottom: 20px;">
        <div style="text-align: center; margin-bottom: 28px;">
            <h2 style="font-size: 24px; font-weight: 800; color: #475569; display: inline-flex; align-items: center; gap: 8px;">
                <i class="fa-solid fa-clock-rotate-left"></i> Completed Saturday Hikes Archive
            </h2>
            <p class="text-muted" style="font-size: 12px; margin-top: 4px;">Browse pictures, leader boards, and confirmed rosters of completed weekend hikes.</p>
        </div>
    `;
    html += buildHikeCardsHtml(completedHikes, true);
    html += `</div>`;

    html += ` <hr style="margin: 40px 0; border: none; border-top: 1px solid var(--border);">`;

    // 3. GUIDELINES SECTOR (EXISTING PAGE BLOCKS)
    html += `
    <div class="saturday-guidelines-section">
        <div style="text-align: center; margin-bottom: 24px;">
            <h2 style="font-size: 22px; font-weight: 800; color: var(--text-primary);"><i class="fa-solid fa-clipboard-list"></i> Saturday Guidelines & Eligibility</h2>
            <p class="text-muted" style="font-size: 12px; margin-top: 4px;">Important rules, fitness guidelines, and details for Saturday events.</p>
        </div>
    `;

    blocks.forEach((block, index) => {
        const hasPhoto = block.photo && block.photo.trim() !== '';
        
        let imgHtml = '';
        if (hasPhoto) {
            imgHtml = `<div style="flex: 0 0 45%; max-width: 45%;">
                          <img src="${block.photo}" style="width: 100%; height: auto; border-radius: 8px; box-shadow: var(--shadow-sm); display: block; object-fit: cover;">
                       </div>`;
        }

        const textHtml = `<div style="flex: 1; font-size: 14px; line-height: 1.8; color: var(--text-primary); text-align: left; word-break: break-word;">
                              ${block.text.replace(/\n/g, '<br>')}
                          </div>`;

        html += `
        <div class="saturday-public-block panel-card animate-slide-in" style="display: flex; flex-direction: row; gap: 40px; align-items: flex-start; padding: 30px; margin-bottom: 24px; ${!hasPhoto ? 'justify-content: center;' : ''}">
            ${imgHtml}
            ${textHtml}
        </div>`;
    });

    html += `</div></div>`;
    container.innerHTML = html;
}

// Global actions for Saturday cards
window.selectSaturdayItinerary = (id, destination) => {
    state.currentTab = 'signup';
    document.querySelectorAll('.tab-panel').forEach(panel => panel.classList.remove('active'));
    
    // Switch active header state
    document.querySelectorAll('.public-menu a').forEach(a => a.classList.remove('active'));
    
    const signupPanel = document.getElementById('signup-panel');
    if (signupPanel) signupPanel.classList.add('active');
    
    // Scroll to signup form
    const appContainer = document.getElementById('admin-app');
    if (appContainer) {
        appContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    
    // Set trek selector type to Saturday
    populatePublicTrekSelects();
    
    const select = document.getElementById('signup-trek-select');
    if (select) {
        select.value = `SAT_${id}`;
        // Trigger change event to load details
        const event = new Event('change');
        select.dispatchEvent(event);
    }
    
    showToast(`Hike "${destination}" selected! Fill out details to subscribe.`, 'success');
    renderAll();
};

window.openSaturdayItineraryModal = (id) => {
    const hikes = getData('admin_saturday_hikes') || [];
    const hike = hikes.find(h => h.id === id);
    if (!hike) return;

    window.currentItineraryTrekName = `SAT_${id}`;

    const modal = document.getElementById('itinerary-modal');
    const title = document.getElementById('itinerary-modal-title');
    const mapContainer = document.getElementById('itinerary-modal-map');
    const mapLink = document.getElementById('itinerary-map-link');
    const desc = document.getElementById('itinerary-modal-desc');
    const registerBtn = document.getElementById('btn-itinerary-register');

    if (modal && title && desc) {
        title.innerHTML = `<i class="fa-solid fa-person-hiking"></i> Saturday Hike Details: ${hike.destination}`;
        desc.innerHTML = hike.description ? hike.description.replace(/\n/g, '<br>') : `<strong>Trail Destination:</strong> ${hike.destination}<br><strong>Pricing:</strong> Rs. ${hike.price}<br><strong>Difficulty:</strong> ${hike.difficulty}<br><strong>Team Leader:</strong> ${hike.leader || 'Sundar Gurung'}<br><br>No custom itinerary specified by the admin.`;
        
        if (hike.mapLink) {
            mapLink.href = hike.mapLink;
            mapContainer.style.display = 'block';
        } else {
            mapContainer.style.display = 'none';
        }

        if (registerBtn) {
            registerBtn.innerHTML = `<i class="fa-solid fa-file-signature"></i> Subscribe to Hike`;
            registerBtn.onclick = () => {
                closeItineraryModal();
                selectSaturdayItinerary(hike.id, hike.destination);
            };
        }
        
        modal.style.display = 'flex';
    }
};

function initHeroPhotoHoverPopup() {
    const hoverPopup = document.createElement('div');
    hoverPopup.id = 'hero-photo-hover-popup';
    hoverPopup.style.cssText = `
        position: fixed;
        z-index: 9999;
        display: none;
        pointer-events: none;
        background: rgba(255, 255, 255, 0.98);
        border: 4px solid #ffffff;
        border-radius: 12px;
        box-shadow: 0 16px 36px rgba(0,0,0,0.3);
        padding: 6px;
        width: 200px;
        height: 270px;
        transform: translate(-50%, -105%) scale(0.9);
        transition: opacity 0.25s cubic-bezier(0.165, 0.84, 0.44, 1), transform 0.25s cubic-bezier(0.165, 0.84, 0.44, 1);
        opacity: 0;
    `;
    hoverPopup.innerHTML = `<img id="hover-popup-img" style="width: 100%; height: 100%; display: block; border-radius: 8px; object-fit: cover;">`;
    document.body.appendChild(hoverPopup);

    document.addEventListener('mouseover', (e) => {
        const cell = e.target.closest('.photo-cell');
        if (cell && cell.parentElement && cell.parentElement.id === 'hero-photo-strip') {
            const img = cell.querySelector('img');
            if (img) {
                const popupImg = document.getElementById('hover-popup-img');
                popupImg.src = img.src;
                hoverPopup.style.display = 'block';
                setTimeout(() => {
                    hoverPopup.style.opacity = '1';
                    hoverPopup.style.transform = 'translate(-50%, -108%) scale(1)';
                }, 10);
            }
        }
    });

    document.addEventListener('mousemove', (e) => {
        const cell = e.target.closest('.photo-cell');
        if (cell && cell.parentElement && cell.parentElement.id === 'hero-photo-strip') {
            hoverPopup.style.left = `${e.clientX}px`;
            hoverPopup.style.top = `${e.clientY - 15}px`;
        }
    });

    document.addEventListener('mouseout', (e) => {
        const cell = e.target.closest('.photo-cell');
        if (cell && cell.parentElement && cell.parentElement.id === 'hero-photo-strip') {
            hoverPopup.style.opacity = '0';
            hoverPopup.style.transform = 'translate(-50%, -105%) scale(0.9)';
            setTimeout(() => {
                if (hoverPopup.style.opacity === '0') {
                    hoverPopup.style.display = 'none';
                }
            }, 200);
        }
    });
}
