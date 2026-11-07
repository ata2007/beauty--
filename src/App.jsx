import { useEffect, useRef, useState } from 'react'
import './App.css'

const products = [
  {
    slug: 'santal-no-04',
    name: 'Santal No. 04',
    category: 'Eau de parfum',
    description: 'Sandalwood · amber · soft musk',
    price: '₦48,000',
    rating: '4.9',
    image:
      'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=900&q=85',
    images: [
      'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=85',
    ],
    variants: ['30 ml', '50 ml', '100 ml'],
    details: [
      'Warm sandalwood softened by amber and skin musk.',
      'Top notes: bergamot and cardamom.',
      'Heart notes: creamy sandalwood and iris.',
      'Base notes: amber, musk, and cedarwood.',
    ],
    label: 'BEST SELLER',
  },
  {
    slug: 'rose-eternelle',
    name: 'Rose Éternelle',
    category: 'Eau de parfum',
    description: 'Damask rose · peony · warm woods',
    price: '₦42,000',
    rating: '4.8',
    image:
      'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=900&q=85',
    images: [
      'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1200&q=85',
    ],
    variants: ['30 ml', '50 ml', '100 ml'],
    details: [
      'A modern floral built around velvety Damask rose.',
      'Top notes: pink pepper and mandarin.',
      'Heart notes: Damask rose and peony.',
      'Base notes: cashmere woods and soft musk.',
    ],
    label: 'CUSTOMER FAVOURITE',
  },
  {
    slug: 'vanille-noire',
    name: 'Vanille Noire',
    category: 'Eau de parfum',
    description: 'Madagascar vanilla · tonka · cocoa',
    price: '₦45,000',
    rating: '5.0',
    image:
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=900&q=85',
    images: [
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1200&q=85',
    ],
    variants: ['30 ml', '50 ml', '100 ml'],
    details: [
      'A deep, comforting vanilla with a softly smoky finish.',
      'Top notes: bitter orange and cocoa.',
      'Heart notes: Madagascar vanilla and jasmine.',
      'Base notes: tonka bean, amber, and cedar.',
    ],
    label: 'LIMITED EDITION',
  },
  {
    slug: 'golden-hour',
    name: 'Golden Hour',
    category: 'Eau de parfum',
    description: 'Bergamot · neroli · golden musk',
    price: '₦39,000',
    rating: '4.9',
    image:
      'https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=900&q=85',
    images: [
      'https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1200&q=85',
    ],
    variants: ['30 ml', '50 ml', '100 ml'],
    details: [
      'Bright citrus and neroli settle into a luminous musk.',
      'Top notes: bergamot and mandarin.',
      'Heart notes: neroli and orange blossom.',
      'Base notes: golden musk and pale woods.',
    ],
    label: 'NEW ARRIVAL',
  },
  {
    slug: 'oud-fig',
    name: 'Oud & Fig',
    category: 'Eau de parfum',
    description: 'Black fig · smoked oud · cedar',
    price: '₦52,000',
    rating: '4.9',
    image:
      'https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&w=900&q=85',
    images: [
      'https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=1200&q=85',
    ],
    variants: ['30 ml', '50 ml', '100 ml'],
    details: [
      'Dark fig and smoked oud bring depth to this unisex scent.',
      'Top notes: black fig and saffron.',
      'Heart notes: smoked oud and rose.',
      'Base notes: cedar, patchouli, and amber.',
    ],
    label: 'SIGNATURE SCENT',
  },
]

const categories = [
  {
    name: 'Women’s fragrances',
    image:
      'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Men’s fragrances',
    image:
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Unisex scents',
    image:
      'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Discovery sets',
    image:
      'https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Body & home',
    image:
      'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Gift sets',
    image:
      'https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?auto=format&fit=crop&w=600&q=80',
  },
]

function ArrowIcon({ diagonal = false }) {
  return (
    <svg
      aria-hidden="true"
      className={diagonal ? 'arrow-icon arrow-icon--diagonal' : 'arrow-icon'}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path d="M3.5 10h12m-5-5 5 5-5 5" />
    </svg>
  )
}

function SiteHeader({ cartCount, isProductPage, navigateTo }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchMessage, setSearchMessage] = useState('')
  const menuToggleRef = useRef(null)
  const closeButtonRef = useRef(null)

  useEffect(() => {
    if (!menuOpen) return undefined

    const menuToggle = menuToggleRef.current
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    function handleKeyDown(event) {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    window.addEventListener('keydown', handleKeyDown)
    closeButtonRef.current?.focus()

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
      menuToggle?.focus()
    }
  }, [menuOpen])

  function navigateFromProduct(event, target) {
    if (!isProductPage) {
      setMenuOpen(false)
      return
    }

    event.preventDefault()
    setMenuOpen(false)
    navigateTo(target)
  }

  function navigateFromMenu(event, target) {
    setMenuOpen(false)
    if (!isProductPage) return

    event.preventDefault()
    navigateTo(target)
  }

  function searchProducts(event) {
    event.preventDefault()
    const query = searchQuery.trim().toLocaleLowerCase()
    const match = products.find((product) =>
      `${product.name} ${product.description} ${product.category}`
        .toLocaleLowerCase()
        .includes(query),
    )

    if (!query) {
      setSearchMessage('Enter a scent or note to search.')
      return
    }

    if (!match) {
      setSearchMessage('No fragrances found. Try another name or note.')
      return
    }

    setSearchMessage('')
    setMenuOpen(false)
    navigateTo(`/product/${match.slug}`)
  }

  return (
    <>
      <div className="announcement">
        <a
          href={isProductPage ? '/#bestsellers' : '#bestsellers'}
          onClick={(event) => navigateFromProduct(event, '/#bestsellers')}
        >
          Free shipping on orders over ₦50,000 <span aria-hidden="true">·</span> Shop now
          <ArrowIcon />
        </a>
      </div>
      <header className="site-header">
        <button
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          className="menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          ref={menuToggleRef}
          type="button"
        >
          <span />
          <span />
        </button>
        <nav
          aria-label="Main navigation"
          className="main-nav"
        >
          <a href={isProductPage ? '/#home' : '#home'} onClick={(event) => navigateFromProduct(event, '/#home')}>Home</a>
          <a href={isProductPage ? '/#story' : '#story'} onClick={(event) => navigateFromProduct(event, '/#story')}>About</a>
          <a href={isProductPage ? '/#bestsellers' : '#bestsellers'} onClick={(event) => navigateFromProduct(event, '/#bestsellers')}>Products</a>
          <a href={isProductPage ? '/#newsletter' : '#newsletter'} onClick={(event) => navigateFromProduct(event, '/#newsletter')}>Journal</a>
          <a href="mailto:hello@euvola.com" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
        <a
          aria-label="Euvola home"
          className="brand-lockup"
          href={isProductPage ? '/' : '#home'}
          onClick={(event) => navigateFromProduct(event, '/')}
        >
          <span className="wordmark">EUVOLA<sup>®</sup></span>
          <span className="brand-caption">BEAUTY &amp; ACCESSORIES</span>
        </a>
        <div className="header-actions">
          <a
            className="search-link"
            href={isProductPage ? '/#bestsellers' : '#bestsellers'}
            onClick={(event) => navigateFromProduct(event, '/#bestsellers')}
          >
            Search
          </a>
          <a
            className="account-link"
            href={isProductPage ? '/#newsletter' : '#newsletter'}
            onClick={(event) => navigateFromProduct(event, '/#newsletter')}
          >
            Account
          </a>
          <a
            aria-label={`Shopping bag, ${cartCount} items`}
            className="bag-link"
            href={isProductPage ? '/#bestsellers' : '#bestsellers'}
            onClick={(event) => navigateFromProduct(event, '/#bestsellers')}
          >
            Bag <span aria-hidden="true">·</span><span className="bag-count">{cartCount}</span>
          </a>
          <a
            className="header-shop button button--dark"
            href={isProductPage ? '/#bestsellers' : '#bestsellers'}
            onClick={(event) => navigateFromProduct(event, '/#bestsellers')}
          >
            Shop now
          </a>
        </div>
      </header>
      {menuOpen && (
        <div
          aria-label="Mobile navigation"
          aria-modal="true"
          className="mobile-menu-overlay"
          role="dialog"
        >
          <div className="mobile-menu-header">
            <button
              aria-label="Close menu"
              className="mobile-menu-icon mobile-menu-close"
              onClick={() => setMenuOpen(false)}
              ref={closeButtonRef}
              type="button"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <path d="m6 6 12 12M18 6 6 18" />
              </svg>
            </button>
            <a
              aria-label="Euvola home"
              className="mobile-menu-wordmark"
              href={isProductPage ? '/' : '#home'}
              onClick={(event) => navigateFromProduct(event, '/')}
            >
              EUVOLA
            </a>
            <a
              aria-label={`Shopping bag, ${cartCount} items`}
              className="mobile-menu-icon mobile-menu-bag"
              href={isProductPage ? '/#bestsellers' : '#bestsellers'}
              onClick={(event) => navigateFromProduct(event, '/#bestsellers')}
            >
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <path d="M5.5 8h13l1 12h-15l1-12Z" />
                <path d="M9 9V6a3 3 0 0 1 6 0v3" />
              </svg>
              <span className="mobile-menu-bag-count">{cartCount}</span>
            </a>
          </div>
          <div className="mobile-menu-content">
            <nav aria-label="Mobile main navigation" className="mobile-menu-links">
              <a href={isProductPage ? '/#home' : '#home'} onClick={(event) => navigateFromMenu(event, '/#home')}>HOME</a>
              <a href={isProductPage ? '/#story' : '#story'} onClick={(event) => navigateFromMenu(event, '/#story')}>ABOUT</a>
              <a href={isProductPage ? '/#bestsellers' : '#bestsellers'} onClick={(event) => navigateFromMenu(event, '/#bestsellers')}>PRODUCTS</a>
              <a href={isProductPage ? '/#newsletter' : '#newsletter'} onClick={(event) => navigateFromMenu(event, '/#newsletter')}>JOURNAL</a>
              <a href="mailto:hello@euvola.com" onClick={() => setMenuOpen(false)}>CONTACT</a>
            </nav>
            <div className="mobile-account-links">
              <a href="mailto:hello@euvola.com?subject=Account%20help" onClick={() => setMenuOpen(false)}>Log in</a>
              <a href="mailto:hello@euvola.com?subject=Create%20an%20account" onClick={() => setMenuOpen(false)}>Create account</a>
            </div>
            <div aria-label="Social media" className="mobile-social-links">
              <a aria-label="Facebook" href="https://www.facebook.com/" rel="noreferrer" target="_blank">
                <svg aria-hidden="true" viewBox="0 0 24 24">
                  <path d="M14 8h3V4h-3c-3.3 0-5 2-5 5v2H6v4h3v6h4v-6h3l1-4h-4V9c0-.7.3-1 1-1Z" />
                </svg>
              </a>
              <a aria-label="Instagram" href="https://www.instagram.com/" rel="noreferrer" target="_blank">
                <svg aria-hidden="true" viewBox="0 0 24 24">
                  <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <path d="M17.5 6.8h.01" />
                </svg>
              </a>
              <a aria-label="Pinterest" href="https://www.pinterest.com/" rel="noreferrer" target="_blank">
                <svg aria-hidden="true" viewBox="0 0 24 24">
                  <path d="M12 3a9 9 0 0 0-3.3 17.4c0-.8 0-1.8.2-2.7l1.2-5.2s-.3-.6-.3-1.5c0-1.4.8-2.5 1.8-2.5.8 0 1.2.6 1.2 1.4 0 .9-.6 2.2-.9 3.5-.3 1 .5 1.8 1.5 1.8 1.8 0 3-2.3 3-5.1 0-2.1-1.4-3.7-4-3.7-2.9 0-4.7 2.2-4.7 4.7 0 .9.3 1.6.7 2.1.2.2.2.3.1.6l-.2.8c-.1.3-.3.4-.5.3-1.3-.5-2-1.9-2-3.5 0-2.6 2.2-5.7 6.7-5.7 3.6 0 6 2.6 6 5.4 0 3.7-2.1 6.5-5.1 6.5-1 0-1.9-.6-2.2-1.2l-.7 2.8c-.2 1-.7 1.9-1.1 2.7A9 9 0 1 0 12 3Z" />
                </svg>
              </a>
            </div>
            <form className="mobile-search" onSubmit={searchProducts} role="search">
              <label className="visually-hidden" htmlFor="mobile-menu-search">Search fragrances</label>
              <input
                autoComplete="off"
                id="mobile-menu-search"
                onChange={(event) => {
                  setSearchQuery(event.target.value)
                  setSearchMessage('')
                }}
                placeholder="Search"
                type="search"
                value={searchQuery}
              />
              <button aria-label="Search products" type="submit">
                <svg aria-hidden="true" viewBox="0 0 24 24">
                  <circle cx="10.8" cy="10.8" r="6.3" />
                  <path d="m15.5 15.5 4 4" />
                </svg>
              </button>
            </form>
            {searchMessage && <p aria-live="polite" className="mobile-search-message">{searchMessage}</p>}
          </div>
        </div>
      )}
    </>
  )
}

function ProductDetails({ product, cartCount, navigateTo, onAdd }) {
  const [selectedImage, setSelectedImage] = useState(product.images[0])
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0])
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  function addToBag() {
    onAdd(quantity)
    setAdded(true)
  }

  function navigateHome(event, target) {
    event.preventDefault()
    navigateTo(target)
  }

  return (
    <>
      <SiteHeader cartCount={cartCount} isProductPage navigateTo={navigateTo} />
      <main className="product-detail section-wrap">
        <nav aria-label="Breadcrumb" className="product-breadcrumb">
          <a href="/" onClick={(event) => navigateHome(event, '/')}>Home</a>
          <span aria-hidden="true">/</span>
          <a href="/#bestsellers" onClick={(event) => navigateHome(event, '/#bestsellers')}>Shop</a>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{product.name}</span>
        </nav>

        <div className="product-detail-grid">
          <div className="product-gallery">
            <div className="product-main-image">
              <img src={selectedImage} alt={`${product.name} fragrance`} />
              <span className="product-detail-label">{product.label}</span>
            </div>
            <div aria-label={`${product.name} image gallery`} className="product-thumbnails">
              {product.images.map((image, index) => (
                <button
                  aria-label={`Show product image ${index + 1}`}
                  aria-pressed={selectedImage === image}
                  className={selectedImage === image ? 'product-thumbnail product-thumbnail--active' : 'product-thumbnail'}
                  key={image}
                  onClick={() => setSelectedImage(image)}
                  type="button"
                >
                  <img src={image} alt="" />
                </button>
              ))}
            </div>
          </div>

          <div className="product-detail-info">
            <p className="eyebrow">{product.category}</p>
            <h1>{product.name}</h1>
            <div className="detail-price-row">
              <span className="detail-price">{product.price}</span>
              <a className="detail-rating" href="#product-reviews">
                <span aria-label="5 out of 5 stars">★★★★★</span>
                <span>{product.rating} (128 reviews)</span>
              </a>
            </div>
            <p className="detail-description">{product.description}. A considered fragrance made to linger, from your first impression to the last note.</p>

            <fieldset className="variant-picker">
              <legend>Choose your size <span>— {selectedVariant}</span></legend>
              <div className="variant-options">
                {product.variants.map((variant) => (
                  <button
                    aria-pressed={selectedVariant === variant}
                    className={selectedVariant === variant ? 'variant-option variant-option--selected' : 'variant-option'}
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    type="button"
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </fieldset>

            <div className="detail-purchase">
              <div aria-label="Quantity" className="quantity-picker">
                <button
                  aria-label="Decrease quantity"
                  disabled={quantity <= 1}
                  onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                  type="button"
                >
                  −
                </button>
                <span aria-live="polite">{quantity}</span>
                <button
                  aria-label="Increase quantity"
                  onClick={() => setQuantity((current) => current + 1)}
                  type="button"
                >
                  +
                </button>
              </div>
              <button className="detail-add-button" onClick={addToBag} type="button">
                {added ? 'Added to bag' : 'Add to bag'} <span>· {cartCount}</span>
              </button>
            </div>
            <p aria-live="polite" className="detail-feedback">
              {added ? `${quantity} × ${product.name} (${selectedVariant}) added to your bag.` : 'Complimentary delivery on orders over ₦50,000.'}
            </p>

            <div className="product-benefits">
              <span><i aria-hidden="true">↗</i> Fast delivery</span>
              <span><i aria-hidden="true">◇</i> Secure checkout</span>
            </div>

            <div className="product-accordions">
              <details>
                <summary>Details &amp; ingredients <span aria-hidden="true">+</span></summary>
                <ul>
                  {product.details.map((detail) => <li key={detail}>{detail}</li>)}
                </ul>
                <p>Made with care. For external use only.</p>
              </details>
              <details>
                <summary>Shipping &amp; returns <span aria-hidden="true">+</span></summary>
                <p>Complimentary delivery on orders above ₦50,000. Unopened items may be returned within 14 days of delivery.</p>
              </details>
            </div>
          </div>
        </div>
      </main>
      <section aria-label="Customer reviews" className="detail-review-anchor" id="product-reviews">
        <p>LOVED BY OUR COMMUNITY</p>
        <span>★★★★★</span> {product.rating} out of 5 from 128 reviews
      </section>
      <footer className="detail-footer">
        <a href="/" onClick={(event) => navigateHome(event, '/')}>EUVOLA<sup>®</sup></a>
        <span>FRAGRANCE FOR THE FEELING OF BEING HERE.</span>
        <a href="/#bestsellers" onClick={(event) => navigateHome(event, '/#bestsellers')}>CONTINUE SHOPPING ↑</a>
      </footer>
    </>
  )
}

function App() {
  const [cartCount, setCartCount] = useState(0)
  const [favorites, setFavorites] = useState([])
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [storyOpen, setStoryOpen] = useState(false)
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    function handlePopState() {
      setCurrentPath(window.location.pathname)
      const hash = window.location.hash.slice(1)
      if (hash) {
        requestAnimationFrame(() => document.getElementById(hash)?.scrollIntoView())
      } else {
        window.scrollTo(0, 0)
      }
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  function navigateTo(path) {
    window.history.pushState({}, '', path)
    setCurrentPath(window.location.pathname)
    const hash = window.location.hash.slice(1)
    requestAnimationFrame(() => {
      if (hash) document.getElementById(hash)?.scrollIntoView()
      else window.scrollTo(0, 0)
    })
  }

  const productSlug = currentPath.match(/^\/product\/([^/]+)\/?$/)?.[1]
  if (currentPath.startsWith('/product/')) {
    const product = products.find((item) => item.slug === productSlug)
    if (!product) {
      return (
        <main className="product-not-found">
          <p className="eyebrow">A LITTLE DETOUR</p>
          <h1>We couldn’t find that scent.</h1>
          <button className="button button--dark" onClick={() => navigateTo('/')} type="button">
            Back to Euvola <ArrowIcon />
          </button>
        </main>
      )
    }

    return (
      <ProductDetails
        cartCount={cartCount}
        key={product.slug}
        navigateTo={navigateTo}
        onAdd={(quantity) => setCartCount((count) => count + quantity)}
        product={product}
      />
    )
  }

  function toggleFavorite(name) {
    setFavorites((current) =>
      current.includes(name)
        ? current.filter((favorite) => favorite !== name)
        : [...current, name],
    )
  }

  function subscribe(event) {
    event.preventDefault()
    if (email.trim()) setSubscribed(true)
  }

  return (
    <>
      <SiteHeader cartCount={cartCount} navigateTo={navigateTo} />

      <main>
        <section aria-labelledby="hero-title" className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow eyebrow--light">MORE THAN A FRAGRANCE</p>
            <h1 id="hero-title">
              A SCENT
              <br />
              FOR EVERY
              <br />
              SIDE OF YOU
            </h1>
            <p className="hero-description">
              Discover luxurious perfumes crafted to make every moment
              memorable. Elevate your everyday with our signature collection.
            </p>
            <div className="hero-actions">
              <a className="button button--light button--solid" href="#bestsellers">
                Shop bestsellers <ArrowIcon />
              </a>
              <a className="button button--light" href="#categories">
                Explore collections
              </a>
            </div>
            <div className="hero-notes" aria-label="Our promises">
              <span><i aria-hidden="true">✧</i> Premium quality</span>
              <span><i aria-hidden="true">♡</i> Cruelty free</span>
              <span><i aria-hidden="true">↗</i> Free shipping</span>
            </div>
          </div>
          <div className="hero-visual">
            <img
              alt="A sculptural amber perfume bottle in warm afternoon light"
              className="hero-image"
              fetchPriority="high"
              src="https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&w=1500&q=90"
            />
            <div className="hero-stamp">
              <span>GOOD</span>
              <strong>Scents</strong>
              <span>BRIGHTER DAYS</span>
            </div>
            <div className="hero-caption">
              <span>01 / 05</span>
              <span>THE SIGNATURE COLLECTION</span>
            </div>
          </div>
        </section>

        <section aria-labelledby="category-title" className="category-section section-wrap" id="categories">
          <div className="section-heading section-heading--center">
            <p className="eyebrow">SHOP BY CATEGORY</p>
            <h2 id="category-title">Find Your Signature</h2>
          </div>
          <div className="category-grid">
            {categories.map((category) => (
              <a className="category-card" href="#shop" key={category.name}>
                <div className="category-image-wrap">
                  <div className="category-image-inner">
                    <img alt="" loading="lazy" src={category.image} />
                  </div>
                </div>
                <h3>{category.name}</h3>
              </a>
            ))}
          </div>
        </section>

        <section aria-labelledby="bestsellers-title" className="products-section" id="bestsellers">
          <div className="section-wrap">
            <div className="section-heading section-heading--row">
              <div>
                <p className="eyebrow">BESTSELLERS</p>
                <h2 id="bestsellers-title">Our Most Loved Scents</h2>
              </div>
              <a className="text-link" href="#shop">View all products <ArrowIcon /></a>
            </div>
            <div className="product-grid">
              {products.map((product) => {
                const isFavorite = favorites.includes(product.name)
                return (
                  <article className="product-card" key={product.name}>
                    <div className="product-image-wrap">
                      <a
                        aria-label={`View ${product.name}`}
                        className="product-image-link"
                        href={`/product/${product.slug}`}
                        onClick={(event) => {
                          event.preventDefault()
                          navigateTo(`/product/${product.slug}`)
                        }}
                      >
                        <img alt={`${product.name} fragrance`} loading="lazy" src={product.image} />
                      </a>
                      <span className="product-label">{product.label}</span>
                      <button
                        aria-label={isFavorite ? `Remove ${product.name} from favourites` : `Add ${product.name} to favourites`}
                        aria-pressed={isFavorite}
                        className={isFavorite ? 'favorite-button favorite-button--active' : 'favorite-button'}
                        onClick={() => toggleFavorite(product.name)}
                        type="button"
                      >
                        {isFavorite ? '♥' : '♡'}
                      </button>
                    </div>
                    <div className="product-info">
                      <div className="product-title-row">
                        <h3>
                          <a
                            href={`/product/${product.slug}`}
                            onClick={(event) => {
                              event.preventDefault()
                              navigateTo(`/product/${product.slug}`)
                            }}
                          >
                            {product.name}
                          </a>
                        </h3>
                        <span className="product-price">{product.price}</span>
                      </div>
                      <p>{product.description}</p>
                      <span className="product-rating"><span aria-hidden="true">★★★★★</span> {product.rating} <span className="review-count">(128)</span></span>
                      <button
                        className="quick-add"
                        onClick={() => setCartCount((count) => count + 1)}
                        type="button"
                      >
                        Add to cart
                      </button>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section aria-label="Featured collections" className="promo-grid section-wrap" id="shop">
          <a className="promo-card promo-card--dark" href="#bestsellers">
            <img
              alt=""
              loading="lazy"
              src="https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?auto=format&fit=crop&w=1200&q=85"
            />
            <span className="promo-shade" />
            <span className="promo-copy">
              <span className="eyebrow eyebrow--light">THE PERFECT GIFT</span>
              <strong>A gift that<br /><em>speaks volumes.</em></strong>
              <span className="button button--light">Shop gift sets <ArrowIcon /></span>
            </span>
            <span className="promo-index">01 — GIFTING</span>
          </a>
          <a className="promo-card promo-card--light" href="#bestsellers">
            <img
              alt=""
              loading="lazy"
              src="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1200&q=85"
            />
            <span className="promo-shade" />
            <span className="promo-copy">
              <span className="eyebrow">NEW ARRIVAL</span>
              <strong>Fresh<br /><em>perspective.</em></strong>
              <span className="button button--dark">Shop new in <ArrowIcon /></span>
            </span>
            <span aria-hidden="true" className="promo-script">Same<br />Moments<br />New<br />Perspective</span>
            <span className="promo-index">02 — THE EVERYDAY EDIT</span>
          </a>
        </section>

        <section aria-label="Our commitments" className="promise-row">
          <div className="promise-item">
            <span aria-hidden="true" className="promise-icon">♧</span>
            <div><h3>Premium quality</h3><p>Sourced from the finest ingredients.</p></div>
          </div>
          <div className="promise-item">
            <span aria-hidden="true" className="promise-icon">♡</span>
            <div><h3>Cruelty free</h3><p>Kind to animals, always.</p></div>
          </div>
          <div className="promise-item">
            <span aria-hidden="true" className="promise-icon">↗</span>
            <div><h3>Free shipping</h3><p>On orders above ₦50,000.</p></div>
          </div>
          <div className="promise-item">
            <span aria-hidden="true" className="promise-icon">◇</span>
            <div><h3>Secure packaging</h3><p>Because your fragrance matters.</p></div>
          </div>
        </section>

        <section aria-labelledby="story-title" className="story-section section-wrap" id="story">
          <div className="story-copy">
            <p className="eyebrow">OUR STORY</p>
            <h2 id="story-title">Crafted with Passion,<br />Inspired by You</h2>
            <p className="story-description">
              At Euvola, we believe a fragrance is more than just a scent — it&apos;s
              a feeling, a memory, a part of your story. Our mission is to create
              timeless fragrances that empower you to be your true self.
            </p>
            <a className="button button--dark" href="#newsletter">Our story <ArrowIcon /></a>
          </div>
          <div className="story-gallery">
            <div className="story-image-main">
              <img
                alt="A rose fragrance in the Euvola collection"
                loading="lazy"
                src="https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1200&q=85"
              />
              <div className="story-image-overlay">
                <h3>Scents<br />Create<br />Stories</h3>
                <button
                  aria-expanded={storyOpen}
                  aria-label={storyOpen ? 'Close our story' : 'Read our story'}
                  className="story-play"
                  onClick={() => setStoryOpen((open) => !open)}
                  type="button"
                >
                  {storyOpen ? '×' : '▶'}
                </button>
                {storyOpen && (
                  <p aria-live="polite" className="story-reveal">
                    Inspired by the places, people, and small moments that make
                    a scent feel like your own.
                  </p>
                )}
              </div>
            </div>
            <div className="story-image-stack">
              <div className="story-image-small">
                <img
                  alt="Fine ingredients used to create fragrance"
                  loading="lazy"
                  src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800&q=85"
                />
                <span>FINE INGREDIENTS</span>
              </div>
              <div className="story-image-small">
                <img
                  alt="Fragrance crafted with care"
                  loading="lazy"
                  src="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=85"
                />
                <span>CRAFTED WITH CARE</span>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="reviews-title" className="review-section">
          <div className="section-wrap">
            <div className="section-heading section-heading--center">
              <p className="eyebrow">KIND WORDS, KEPT CLOSE</p>
              <h2 id="reviews-title">A scent that <em>stays.</em></h2>
            </div>
            <div className="review-grid">
              {[
                { name: 'AMINA O.', text: 'I wore it once and three people asked what it was. I’ve never felt more like myself.' },
                { name: 'CHIOMA E.', text: 'It feels like the last little bit of sunlight at the end of a really good day.' },
                { name: 'IFEOMA N.', text: 'The kind of fragrance you keep reaching for without even thinking.' },
              ].map((review) => (
                <article className="review-card" key={review.name}>
                  <span aria-label="5 out of 5 stars" className="review-stars">★★★★★</span>
                  <blockquote>“{review.text}”</blockquote>
                  <p>{review.name} <span>— VERIFIED CUSTOMER</span></p>
                </article>
              ))}
            </div>
            <p className="review-summary"><span>★★★★★</span> 4.9/5 from over 2,000 scent stories</p>
          </div>
        </section>

        <section aria-labelledby="newsletter-title" className="newsletter-section" id="newsletter">
          <div className="newsletter-inner">
            <p className="eyebrow eyebrow--light">STAY IN THE KNOW</p>
            <h2 id="newsletter-title">Be the First to Know</h2>
            <p>Get exclusive offers, new launches and fragrance tips straight to your inbox.</p>
            {subscribed ? (
              <p aria-live="polite" className="subscribe-success">You’re on the list. We’re glad you’re here.</p>
            ) : (
              <form className="newsletter-form" onSubmit={subscribe}>
                <label className="visually-hidden" htmlFor="newsletter-email">Your email address</label>
                <input
                  autoComplete="email"
                  id="newsletter-email"
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Enter your email"
                  required
                  type="email"
                  value={email}
                />
                <button aria-label="Subscribe to the newsletter" type="submit"><ArrowIcon /></button>
              </form>
            )}
            <span className="newsletter-note">A thoughtful note. Never too many.</span>
          </div>
          <span aria-hidden="true" className="newsletter-decoration">E</span>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand">
            <a aria-label="Euvola home" className="wordmark wordmark--footer" href="#home">EUVOLA<span>®</span></a>
            <p>Fragrance for the<br />feeling of being here.</p>
            <div aria-label="Follow Euvola" className="social-links">
              <a href="https://www.instagram.com/" rel="noreferrer" target="_blank">IG</a>
              <a href="https://www.pinterest.com/" rel="noreferrer" target="_blank">PI</a>
            </div>
          </div>
          <div className="footer-column">
            <h2>EXPLORE</h2>
            <a href="#shop">Shop all</a>
            <a href="#categories">Our collections</a>
            <a href="#bestsellers">Bestsellers</a>
            <a href="#shop">Gift cards</a>
          </div>
          <div className="footer-column">
            <h2>HERE TO HELP</h2>
            <a href="mailto:hello@euvola.com">Get in touch</a>
            <a href="#newsletter">Shipping & returns</a>
            <a href="#newsletter">Frequently asked</a>
            <a href="#story">Our ingredients</a>
          </div>
          <div className="footer-note">
            <p className="eyebrow">A THOUGHT TO TAKE WITH YOU</p>
            <p>“Smell is a word,<br />scent is literature.”</p>
            <span>— JEAN-CLAUDE ELLENA</span>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2025 EUVOLA FRAGRANCE HOUSE</span>
          <span>MADE WITH CARE, WORN WITH FEELING.</span>
          <a href="#home">BACK TO TOP ↑</a>
        </div>
      </footer>
    </>
  )
}

export default App
