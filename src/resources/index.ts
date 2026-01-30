// src/resources/index.ts

// --- 1. CẤU HÌNH HỆ THỐNG (BẮT BUỘC ĐỂ KHÔNG LỖI BUILD) ---
export const baseURL = 'https://eztool4teach.com'

export const routes = {
  '/': true,
  '/about': true,
  '/work': true,
  '/blog': true,
  '/gallery': false // Tắt gallery nếu chưa có ảnh
}

// Biến này bị thiếu gây lỗi Layout
export const protectedRoutes = {} 

export const effects = {
  gradient: true,
  dots: true,
  lines: true,
}

export const style = {
  theme: 'dark',
  neutral: 'gray',
  brand: 'indigo',
  accent: 'blue',
  solid: 'contrast',
  solidStyle: 'flat',
  border: 'playful',
  surface: 'translucent',
  transition: 'all',
}

export const display = {
  location: true,
  time: true,
}

// Biến này bị thiếu gây lỗi Layout
export const dataStyle = {
  locale: 'vi-VN',
  format: 'DD/MM/YYYY'
}

export const mailchimp = {
  action: 'https://url/subscribe/post?u=...',
  effects: {
    mask: true,
    gradient: true,
    dots: true,
    lines: false,
  },
}

// Biến này bị thiếu gây lỗi Mailchimp.tsx
export const newsletter = {
  display: true,
  title: 'Đăng ký nhận tin',
  description: 'Nhận thông báo khi có công cụ mới từ thầy Tùng'
}

// Biến này bị thiếu gây lỗi ShareSection.tsx
export const socialSharing = [
  'facebook',
  'linkedin',
  'twitter'
]

// --- 2. THÔNG TIN CÁ NHÂN (ĐÃ CÁ NHÂN HÓA) ---
export const person = {
  name: 'Võ Ngọc Tùng',
  avatar: '/images/avatar.jpg', 
  role: 'Giáo viên & Developer',
  location: 'Vĩnh Long, VN',
  languages: ['Tiếng Việt', 'English'],
}

export const social = {
  file: '',
  linkedin: '',
  twitter: '',
  zalo: 'https://zalo.me/0814666040',
  facebook: 'https://facebook.com/vongoctungthcs',
  email: 'mailto:vongoctung@gmail.com',
  phone: '0814666040',
}

// --- 3. NỘI DUNG TRANG CHỦ ---
export const home = {
  label: 'Trang chủ',
  title: 'Trung tâm công cụ dạy học EZ',
  description: 'Giải pháp giáo dục 4.0 sáng tạo bởi thầy Võ Ngọc Tùng',
  headline: 'Công cụ dạy học EZ',
  subline: 'Hỗ trợ giáo viên 4.0 tại THCS Nguyễn Văn Bánh. Đơn giản hóa việc giảng dạy.',
  image: '/images/cover.jpg',
  featured: {
    display: true,
    title: 'Dự án Mới: EZ Slides',
    href: 'https://app.eztool4teach.com',
  },
}

// --- 4. NỘI DUNG TRANG GIỚI THIỆU ---
export const about = {
  label: 'Giới thiệu',
  title: 'Về tôi',
  description: 'Thông tin về thầy Tùng',
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    link: 'https://zalo.me/0814666040',
    text: 'Chat Zalo Ngay',
  },
  intro: {
    display: true,
    title: 'Xin chào',
    description: 'Tôi là Võ Ngọc Tùng, giáo viên tại THCS Nguyễn Văn Bánh. Tôi đam mê xây dựng các công cụ hỗ trợ đồng nghiệp dạy học hiệu quả hơn.',
  },
  work: {
    display: true,
    title: 'Kinh nghiệm',
    experiences: [
      {
        company: 'THCS Nguyễn Văn Bánh',
        timeframe: 'Hiện tại',
        role: 'Giáo viên',
        achievements: [
          'Giảng dạy và ứng dụng công nghệ thông tin.',
          'Phát triển phần mềm hỗ trợ dạy học.'
        ],
        images: []
      }
    ],
  },
  studies: {
    display: true,
    title: 'Học vấn',
    institutions: [
       {
        company: 'Đại học Sư phạm',
        description: 'Chuyên ngành Sư phạm',
       }
    ],
  },
  technical: {
    display: true,
    title: 'Kỹ năng',
    skills: [
      {
        title: 'Công nghệ',
        description: 'Word, Excel, PowerPoint, Web Design',
        images: []
      }
    ],
  },
  social: {
    display: true,
    title: 'Kết nối',
    data: [
      {
        id: 'facebook',
        role: 'Facebook',
        url: social.facebook,
      },
      {
        id: 'zalo',
        role: 'Zalo',
        url: social.zalo,
      },
    ],
  },
}

// --- 5. CÁC MỤC KHÁC (GIỮ NGUYÊN ĐỂ KHÔNG LỖI) ---
export const blog = {
  label: 'Bài viết',
  title: 'Chia sẻ kinh nghiệm',
  description: 'Các bài viết về công nghệ giáo dục',
}

export const work = {
  label: 'Sản phẩm',
  title: 'Kho công cụ EZ',
  description: 'Danh sách các phần mềm tôi đã phát triển',
}

export const gallery = {
  label: 'Ảnh',
  title: 'Hoạt động',
  description: 'Hình ảnh thực tế',
}
