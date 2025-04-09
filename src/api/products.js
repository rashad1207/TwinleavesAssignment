import axios from 'axios';

export const fetchProducts = async () => {
  try {
    const response = await axios.post(
      'https://catalog-management-system-dev-ak3ogf6zea-uc.a.run.app/cms/filter/product',
      {
        page: '1',
        pageSize: '10',
        sort: { creationDateSortOption: 'DESC' },
      }
    );
    
    console.log('Products fetched:', response.data.products);
    return response.data.products || [];
  } catch (error) {
    console.error('Error fetching products:', error.message || error);
    return []; // Return empty array so app doesn't crash
  }
};
