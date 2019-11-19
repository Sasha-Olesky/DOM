export const keywordMap = {
  product: [undefined],
  'product:apparel': [
    { department: 'ladies_all' },
    { department: 'men_all' },
    { department: 'kids_all' }
  ],
  'product:apparel:men': [{ department: 'men_all' }],
  'product:apparel:men:accessory': [
    {
      department: 'men_all',
      category: 'men_accessories'
    }
  ],
  'product:apparel:men:active_sport': [
    {
      department: 'men_all',
      category: 'men_sport'
    },
    {
      department: 'men_all',
      category: 'men_extended_sizes',
      'product-type': 'men_extended_sizes_sport'
    }
  ],
  'product:apparel:men:basic': [
    {
      department: 'men_all',
      category: 'men_basics'
    }
  ],
  'product:apparel:men:jeans': [
    {
      department: 'men_all',
      category: 'men_jeans'
    }
  ],
  'product:apparel:men:knit_fleece': [
    {
      department: 'men_all',
      category: 'men_cardigansjumpers'
    }
  ],
  'product:apparel:men:outer_jacket': [
    {
      department: 'men_all',
      category: 'men_jacketscoats'
    },
    {
      department: 'men_all',
      category: 'men_extended_sizes',
      'product-type': 'men_extended_sizes_jackets'
    }
  ],
  'product:apparel:men:pants': [
    {
      department: 'men_all',
      category: 'men_trousers'
    },
    {
      department: 'men_all',
      category: 'men_extended_sizes',
      'product-type': 'men_extended_sizes_bottoms'
    }
  ],
  'product:apparel:men:shoes': [
    {
      department: 'men_all',
      category: 'men_shoes'
    }
  ],
  'product:apparel:men:shorts': [
    {
      department: 'men_all',
      category: 'men_shorts'
    }
  ],
  'product:apparel:men:socks': [
    {
      department: 'men_all',
      category: 'men_socks'
    }
  ],
  'product:apparel:men:suit': [
    {
      department: 'men_all',
      category: 'men_blazerssuits'
    },
    {
      department: 'men_all',
      category: 'men_extended_sizes',
      'product-type': 'men_extended_sizes_blazerssuits'
    }
  ],
  'product:apparel:men:swim': [
    {
      department: 'men_all',
      category: 'men_swimweear'
    }
  ],
  'product:apparel:men:top': [
    {
      department: 'men_all',
      category: 'men_tshirtstanks'
    },
    {
      department: 'men_all',
      category: 'men_tshirtstanks',
      'product-type': 'men_extended_sizes_tshirt'
    },
    {
      department: 'men_all',
      category: 'men_shirts'
    },
    {
      department: 'men_all',
      category: 'men_extended_sizes',
      'product-type': 'men_extended_sizes_shirts'
    },
    {
      department: 'men_all',
      category: 'men_hoodiessweatshirts'
    },
    {
      department: 'men_all',
      category: 'men_extended_sizes',
      'product-type': 'men_extended_sizes_hoodies'
    }
  ],
  'product:apparel:men:top:hood_sweatshirt': [
    {
      department: 'men_all',
      category: 'men_hoodiessweatshirts'
    },
    {
      department: 'men_all',
      category: 'men_extended_sizes',
      'product-type': 'men_extended_sizes_hoodies'
    }
  ],
  'product:apparel:men:underwear': [
    {
      department: 'men_all',
      category: 'men_underwearloungewear'
    },
    {
      department: 'men_all',
      category: 'men_extended_sizes',
      'product-type': 'men_extended_sizes_underwear'
    }
  ],
  'product:apparel:women': [{ department: 'ladies_all' }],
  'product:apparel:women:accessory': [
    { department: 'ladies_all', category: 'ladies_accessories' }
  ],
  'product:apparel:women:active_sport': [
    { department: 'ladies_all', category: 'ladies_sport' },
    {
      department: 'ladies_all',
      category: 'ladies_plus',
      'product-type': 'ladies_plus_sport'
    }
  ],
  'product:apparel:women:basic': [
    { department: 'ladies_all', category: 'ladies_basics' },
    {
      department: 'ladies_all',
      category: 'ladies_plus',
      'product-type': 'ladies_plus_basics'
    }
  ],
  'product:apparel:women:dress': [
    { department: 'ladies_all', category: 'ladies_dresses' },
    {
      department: 'ladies_all',
      category: 'ladies_plus',
      'product-type': 'ladies_plus_dresses'
    }
  ],
  'product:apparel:women:jeans': [
    { department: 'ladies_all', category: 'ladies_jeans' },
    {
      department: 'ladies_all',
      category: 'ladies_plus',
      'product-type': 'ladies_plus_jeans'
    }
  ],
  'product:apparel:women:knit_fleece': [
    { department: 'ladies_all', category: 'ladies_knitwear' },
    { department: 'ladies_all', category: 'ladies_cardigansjumpers' }
  ],
  'product:apparel:women:lingerie': [
    { department: 'ladies_all', category: 'ladies_lingerie' },
    {
      department: 'ladies_all',
      category: 'ladies_plus',
      'product-type': 'ladies_plus_lingerietights'
    }
  ],
  'product:apparel:women:maternity': [
    { department: 'ladies_all', category: 'ladies_maternity' }
  ],
  'product:apparel:women:outer_jacket': [
    { department: 'ladies_all', category: 'ladies_jacketscoats' },
    { department: 'ladies_all', category: 'ladies_blazerswaistcoats' },
    {
      department: 'ladies_all',
      category: 'ladies_plus',
      'product-type': 'ladies_plus_jacketsblazers'
    }
  ],
  'product:apparel:women:pants': [
    { department: 'ladies_all', category: 'ladies_trousers' },
    {
      department: 'ladies_all',
      category: 'ladies_plus',
      'product-type': 'ladies_plus_bottoms'
    }
  ],
  'product:apparel:women:shoes': [
    { department: 'ladies_all', category: 'ladies_shoes' }
  ],
  'product:apparel:women:shorts': [
    { department: 'ladies_all', category: 'ladies_shorts' }
  ],
  'product:apparel:women:skirt': [
    { department: 'ladies_all', category: 'ladies_skirts' }
  ],
  'product:apparel:women:sleep_lounge': [
    { department: 'ladies_all', category: 'ladies_nightwear' }
  ],
  'product:apparel:women:socks_tights': [
    { department: 'ladies_all', category: 'ladies_sockstights' },
    {
      department: 'ladies_all',
      category: 'ladies_plus',
      'product-type': 'ladies_plus_lingerietights'
    }
  ],
  'product:apparel:women:swim': [
    { department: 'ladies_all', category: 'ladies_swimwear' },
    {
      department: 'ladies_all',
      category: 'ladies_plus',
      'product-type': 'ladies_plus_swimwear'
    }
  ],
  'product:apparel:women:top': [
    { department: 'ladies_all', category: 'ladies_tops' },
    { department: 'ladies_all', category: 'ladies_shirtsblouses' },
    {
      department: 'ladies_all',
      category: 'ladies_hoodiessweatshirts'
    },
    {
      department: 'ladies_all',
      category: 'ladies_plus',
      'product-type': 'ladies_plus_tops'
    },
    {
      department: 'ladies_all',
      category: 'ladies_plus',
      'product-type': 'ladies_plus_tunics'
    }
  ],
  'product:apparel:women:top:hood_sweatshirt': [
    {
      department: 'ladies_all',
      category: 'ladies_hoodiessweatshirts'
    }
  ],
  'product:apparel:newborn_infant': [
    { department: 'kids_all', category: 'kids_newborn_all' }
  ],
  'product:apparel:toddler': [
    { department: 'kids_all', category: 'kids_babygirl_all' },
    { department: 'kids_all', category: 'kids_babyboy_all' }
  ],
  'product:apparel:toddler:girl': [
    { department: 'kids_all', category: 'kids_babygirl_all' }
  ],
  'product:apparel:toddler:boy': [
    { department: 'kids_all', category: 'kids_babyboy_all' }
  ],
  'product:apparel:little_kid': [
    { department: 'kids_all', category: 'kids_girl8y_all' },
    { department: 'kids_all', category: 'kids_boy8y_all' }
  ],
  'product:apparel:little_kid:girl': [
    { department: 'kids_all', category: 'kids_girl8y_all' }
  ],
  'product:apparel:little_kid:boy': [
    { department: 'kids_all', category: 'kids_boy8y_all' }
  ],
  'product:apparel:big_kid': [
    { department: 'kids_all', category: 'kids_girl14y_all' },
    { department: 'kids_all', category: 'kids_boys14y_all' }
  ],
  'product:apparel:big_kid:girl': [
    { department: 'kids_all', category: 'kids_girl14y_all' }
  ],
  'product:apparel:big_kid:boy': [
    { department: 'kids_all', category: 'kids_boys14y_all' }
  ],
  'product:household': [{ department: 'home_all' }]
}

export const noKeywordMap = {
  'product:apparel': [
    {
      'product-type': 'ladies_all',
      _path:
        '/en_us/women/products/view-all/_jcr_content/main/productlisting_30ab.display.html'
    },
    {
      'product-type': 'men_all',
      _path:
        '/en_us/men/products/view-all/_jcr_content/main/productlisting_fa5b.display.html'
    },
    {
      'product-type': 'kids_all',
      _path:
        '/en_us/kids/products/view-all/_jcr_content/main/productlisting_acbd.display.html'
    }
  ],
  'product:apparel:men': [
    {
      'product-type': 'men_all',
      _path:
        '/en_us/men/products/view-all/_jcr_content/main/productlisting_fa5b.display.html'
    }
  ],
  'product:apparel:men:accessory': [
    {
      'product-type': 'men_accessories',
      _path:
        '/en_us/men/products/accessories/_jcr_content/main/productlisting.display.html'
    }
  ],
  'product:apparel:men:active_sport': [
    {
      'product-type': 'men_sport',
      _path:
        '/en_us/men/products/sportswear/_jcr_content/main/productlisting.display.html'
    },
    {
      'product-type': 'men_extended_sizes_sport',
      _path:
        '/en_us/men/products/big-tall/sportswear/_jcr_content/main/productlisting_2555.display.html'
    }
  ],
  'product:apparel:men:basic': [
    {
      'product-type': 'men_basics',
      _path:
        '/en_us/men/products/basics/_jcr_content/main/productlisting_7b09.display.html'
    }
  ],
  'product:apparel:men:jeans': [
    {
      'product-type': 'men_jeans',
      _path:
        '/en_us/men/products/jeans/_jcr_content/main/productlisting_b887.display.html'
    }
  ],
  'product:apparel:men:knit_fleece': [
    {
      'product-type': 'men_cardigansjumpers',
      _path:
        '/en_us/men/products/cardigans-sweaters/_jcr_content/main/productlisting.display.html'
    }
  ],
  'product:apparel:men:outer_jacket': [
    {
      'product-type': 'men_jacketscoats',
      _path:
        '/en_us/men/products/jackets-coats/_jcr_content/main/productlisting.display.html'
    },
    {
      'product-type': 'men_extended_sizes_jackets',
      _path:
        '/en_us/men/products/big-tall/jackets-coats/_jcr_content/main/productlisting_c5fb.display.html'
    }
  ],
  'product:apparel:men:pants': [
    {
      'product-type': 'men_trousers',
      _path:
        '/en_us/men/products/pants/_jcr_content/main/productlisting.display.html'
    },
    {
      'product-type': 'men_extended_sizes_bottoms',
      _path:
        '/en_us/men/products/big-tall/pants/_jcr_content/main/productlisting_5600.display.html'
    }
  ],
  'product:apparel:men:shoes': [
    {
      'product-type': 'men_shoes',
      _path:
        '/en_us/men/products/shoes/_jcr_content/main/productlisting.display.html'
    }
  ],
  'product:apparel:men:shorts': [
    {
      'product-type': 'men_shorts',
      _path:
        '/en_us/men/products/shorts/_jcr_content/main/productlisting.display.html'
    }
  ],
  'product:apparel:men:socks': [
    {
      'product-type': 'men_socks',
      _path:
        '/en_us/men/products/socks/_jcr_content/main/productlisting.display.html'
    }
  ],
  'product:apparel:men:suit': [
    {
      'product-type': 'men_blazerssuits',
      _path:
        '/en_us/men/products/suits-blazers/_jcr_content/main/productlisting.display.html'
    },
    {
      'product-type': 'men_extended_sizes_blazerssuits',
      _path:
        '/en_us/men/products/big-tall/suits-blazers/_jcr_content/main/productlisting_d4e5.display.html'
    }
  ],
  'product:apparel:men:swim': [
    {
      'product-type': 'men_swimweear',
      _path:
        '/en_us/men/products/swim-wear-trunks/_jcr_content/main/productlisting.display.html'
    }
  ],
  'product:apparel:men:top': [
    {
      'product-type': 'men_tshirtstanks',
      _path:
        '/en_us/men/products/t-shirts-tank-tops/_jcr_content/main/productlisting.display.html'
    },
    {
      'product-type': 'men_shirts',
      _path:
        '/en_us/men/products/shirts/_jcr_content/main/productlisting.display.html'
    },
    {
      'product-type': 'men_hoodiessweatshirts',
      _path:
        '/en_us/men/products/hoodies-sweatshirts/_jcr_content/main/productlisting.display.html'
    },
    {
      'product-type': 'men_extended_sizes_tshirt',
      _path:
        '/en_us/men/products/big-tall/t-shirts-tank-tops/_jcr_content/main/productlisting_4223.display.html'
    },
    {
      'product-type': 'men_extended_sizes_shirts',
      _path:
        '/en_us/men/products/big-tall/shirts/_jcr_content/main/productlisting_3cec.display.html'
    },
    {
      'product-type': 'men_extended_sizes_hoodies',
      _path:
        '/en_us/men/products/big-tall/hoodies-sweatshirts/_jcr_content/main/productlisting_851a.display.html'
    }
  ],
  'product:apparel:men:top:hood_sweatshirt': [
    {
      'product-type': 'men_hoodiessweatshirts',
      _path:
        '/en_us/men/products/hoodies-sweatshirts/_jcr_content/main/productlisting.display.html'
    },
    {
      'product-type': 'men_extended_sizes_hoodies',
      _path:
        '/en_us/men/products/big-tall/hoodies-sweatshirts/_jcr_content/main/productlisting_851a.display.html'
    }
  ],
  'product:apparel:men:underwear': [
    {
      'product-type': 'men_underwearloungewear',
      _path:
        '/en_us/men/products/underwear-boxer-briefs/_jcr_content/main/productlisting.display.html'
    },
    {
      'product-type': 'men_extended_sizes_underwear',
      _path:
        '/en_us/men/products/big-tall/underwear/_jcr_content/main/productlisting_51dc.display.html'
    }
  ],
  'product:apparel:women': [
    {
      'product-type': 'ladies_all',
      _path:
        '/en_us/women/products/view-all/_jcr_content/main/productlisting_30ab.display.html'
    }
  ],
  'product:apparel:women:accessory': [
    {
      'product-type': 'ladies_accessories',
      _path:
        '/en_us/women/products/accessories/_jcr_content/main/productlisting.display.html'
    }
  ],
  'product:apparel:women:active_sport': [
    {
      'product-type': 'ladies_sport',
      _path:
        '/en_us/women/products/workout-clothes/_jcr_content/main/productlisting.display.html'
    },
    {
      'product-type': 'ladies_plus_sport',
      _path:
        '/en_us/women/products/plus-size/activewear/_jcr_content/main/productlisting_3c7d.display.html'
    }
  ],
  'product:apparel:women:basic': [
    {
      'product-type': 'ladies_basics',
      _path:
        '/en_us/women/products/basics/_jcr_content/main/productlisting_f4d1.display.html'
    },
    {
      'product-type': 'ladies_plus_basics',
      _path:
        '/en_us/women/products/plus-size/basics/_jcr_content/main/productlisting.display.html'
    }
  ],
  'product:apparel:women:dress': [
    {
      'product-type': 'ladies_dresses',
      _path:
        '/en_us/women/products/dresses/_jcr_content/main/productlisting.display.html'
    },
    {
      'product-type': 'ladies_plus_dresses',
      _path:
        '/en_us/women/products/plus-size/dresses/_jcr_content/main/productlisting.display.html'
    }
  ],
  'product:apparel:women:jeans': [
    {
      'product-type': 'ladies_jeans',
      _path:
        '/en_us/women/products/jeans/_jcr_content/main/productlisting.display.html'
    },
    {
      'product-type': 'ladies_plus_jeans',
      _path:
        '/en_us/women/products/plus-size/jeans/_jcr_content/main/productlisting.display.html'
    }
  ],
  'product:apparel:women:knit_fleece': [
    {
      'product-type': 'ladies_knitwear',
      _path:
        '/en_us/women/products/knit/_jcr_content/main/productlisting_2305.display.html'
    },
    {
      'product-type': 'ladies_cardigansjumpers',
      _path:
        '/en_us/women/products/cardigans-sweaters/_jcr_content/main/productlisting.display.html'
    }
  ],
  'product:apparel:women:lingerie': [
    {
      'product-type': 'ladies_lingerie',
      _path:
        '/en_us/women/products/lingerie/_jcr_content/main/productlisting.display.html'
    },
    {
      'product-type': 'ladies_plus_lingerietights',
      _path:
        '/en_us/women/products/plus-size/lingerie-tights/_jcr_content/main/productlisting.display.html'
    }
  ],
  'product:apparel:women:maternity': [
    {
      'product-type': 'ladies_maternity',
      _path:
        '/en_us/women/products/maternity-clothes/_jcr_content/main/productlisting.display.html'
    }
  ],
  'product:apparel:women:outer_jacket': [
    {
      'product-type': 'ladies_blazerswaistcoats',
      _path:
        '/en_us/women/products/blazers-vests/_jcr_content/main/productlisting.display.html'
    },
    {
      'product-type': 'ladies_jacketscoats',
      _path:
        '/en_us/women/products/jackets-coats/_jcr_content/main/productlisting.display.html'
    },
    {
      'product-type': 'ladies_plus_jacketsblazers',
      _path:
        '/en_us/women/products/plus-size/jackets-blazers/_jcr_content/main/productlisting.display.html'
    }
  ],
  'product:apparel:women:pants': [
    {
      'product-type': 'ladies_trousers',
      _path:
        '/en_us/women/products/pants/_jcr_content/main/productlisting.display.html'
    },
    {
      'product-type': 'ladies_plus_bottoms',
      _path:
        '/en_us/women/products/plus-size/leggings-shorts-skirts/_jcr_content/main/productlisting.display.html'
    }
  ],
  'product:apparel:women:shoes': [
    {
      'product-type': 'ladies_shoes',
      _path:
        '/en_us/women/products/shoes/_jcr_content/main/productlisting.display.html'
    }
  ],
  'product:apparel:women:shorts': [
    {
      'product-type': 'ladies_shorts',
      _path:
        '/en_us/women/products/shorts/_jcr_content/main/productlisting.display.html'
    }
  ],
  'product:apparel:women:skirt': [
    {
      'product-type': 'ladies_skirts',
      _path:
        '/en_us/women/products/skirts/_jcr_content/main/productlisting.display.html'
    }
  ],
  'product:apparel:women:sleep_lounge': [
    {
      'product-type': 'ladies_nightwear',
      _path:
        '/en_us/women/products/sleepwear/_jcr_content/main/productlisting.display.html'
    }
  ],
  'product:apparel:women:socks_tights': [
    {
      'product-type': 'ladies_sockstights',
      _path:
        '/en_us/women/products/socks-tights/_jcr_content/main/productlisting.display.html'
    },
    {
      'product-type': 'ladies_plus_lingerietights',
      _path:
        '/en_us/women/products/plus-size/lingerie-tights/_jcr_content/main/productlisting.display.html'
    }
  ],
  'product:apparel:women:swim': [
    {
      'product-type': 'ladies_swimwear',
      _path:
        '/en_us/women/products/swimwear/_jcr_content/main/productlisting.display.html'
    },
    {
      'product-type': 'ladies_plus_swimwear',
      _path:
        '/en_us/women/products/plus-size/swimwear/_jcr_content/main/productlisting.display.html'
    }
  ],
  'product:apparel:women:top': [
    {
      'product-type': 'ladies_shirtsblouses',
      _path:
        '/en_us/women/products/shirts-blouses/_jcr_content/main/productlisting.display.html'
    },
    {
      'product-type': 'ladies_tops',
      _path:
        '/en_us/women/products/tops/_jcr_content/main/productlisting.display.html'
    },
    {
      'product-type': 'ladies_plus_tops',
      _path:
        '/en_us/women/products/plus-size/tops/_jcr_content/main/productlisting.display.html'
    },
    {
      'product-type': 'ladies_plus_tunics',
      _path:
        '/en_us/women/products/plus-size/tunics/_jcr_content/main/productlisting.display.html'
    },
    {
      'product-type': 'ladies_hoodiessweatshirts',
      _path:
        '/en_us/women/products/hoodies-sweatshirts/_jcr_content/main/productlisting.display.html'
    }
  ],
  'product:apparel:women:top:hood_sweatshirt': [
    {
      'product-type': 'ladies_hoodiessweatshirts',
      _path:
        '/en_us/women/products/hoodies-sweatshirts/_jcr_content/main/productlisting.display.html'
    }
  ],
  'product:apparel:newborn_infant': [
    {
      'product-type': 'kids_newborn',
      _path:
        '/en_us/kids/products/newborn-size-0-9m/_jcr_content/main/productlisting.display.html'
    }
  ],
  'product:apparel:toddler': [
    {
      'product-type': 'kids_babygirl_all',
      _path:
        '/en_us/kids/products/baby-girls-size-4m-4y/_jcr_content/main/productlisting.display.html'
    },
    {
      'product-type': 'kids_babyboy_all',
      _path:
        '/en_us/kids/products/baby-boy-size-4m-4y/_jcr_content/main/productlisting.display.html'
    }
  ],
  'product:apparel:toddler:girl': [
    {
      'product-type': 'kids_babygirl_all',
      _path:
        '/en_us/kids/products/baby-girls-size-4m-4y/_jcr_content/main/productlisting.display.html'
    }
  ],
  'product:apparel:toddler:boy': [
    {
      'product-type': 'kids_babyboy_all',
      _path:
        '/en_us/kids/products/baby-boy-size-4m-4y/_jcr_content/main/productlisting.display.html'
    }
  ],
  'product:apparel:little_kid': [
    {
      'product-type': 'kids_girl8y',
      _path:
        '/en_us/kids/products/girls-size-18m-10y/_jcr_content/main/productlisting.display.html'
    },
    {
      'product-type': 'kids_boy8y',
      _path:
        '/en_us/kids/products/boys-size-18m-10y/_jcr_content/main/productlisting.display.html'
    }
  ],
  'product:apparel:little_kid:girl': [
    {
      'product-type': 'kids_girl8y',
      _path:
        '/en_us/kids/products/girls-size-18m-10y/_jcr_content/main/productlisting.display.html'
    }
  ],
  'product:apparel:little_kid:boy': [
    {
      'product-type': 'kids_boy8y',
      _path:
        '/en_us/kids/products/boys-size-18m-10y/_jcr_content/main/productlisting.display.html'
    }
  ],
  'product:apparel:big_kid': [
    {
      'product-type': 'kids_girl14y',
      _path:
        '/en_us/kids/products/girls-size-8-14y/_jcr_content/main/productlisting.display.html'
    },
    {
      'product-type': 'kids_boys14y',
      _path:
        '/en_us/kids/products/boys-size-8-14y/_jcr_content/main/productlisting.display.html'
    }
  ],
  'product:apparel:big_kid:girl': [
    {
      'product-type': 'kids_girl14y',
      _path:
        '/en_us/kids/products/girls-size-8-14y/_jcr_content/main/productlisting.display.html'
    }
  ],
  'product:apparel:big_kid:boy': [
    {
      'product-type': 'kids_boys14y',
      _path:
        '/en_us/kids/products/boys-size-8-14y/_jcr_content/main/productlisting.display.html'
    }
  ],
  'product:household': [
    {
      'product-type': 'home_all',
      _path:
        '/en_us/home/products/view-all/_jcr_content/main/productlisting_c559.display.html'
    }
  ]
}
