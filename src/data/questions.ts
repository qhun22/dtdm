export interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number; // 0-indexed
  multipleCorrect?: number[]; // for multi-select
  type: 'single' | 'truefalse';
}

export interface Lesson {
  id: number;
  title: string;
  subtitle: string;
  icon: string;
  questions: Question[];
  available: boolean;
}

const lesson1: Question[] = [
  {
    id: 1,
    type: 'single',
    question: 'Theo định nghĩa của US NIST, điện toán đám mây cho phép truy cập tài nguyên như thế nào?',
    options: [
      'Qua phần mềm cài đặt cục bộ',
      'Qua mạng Internet một cách thuận tiện và theo nhu cầu',
      'Qua thiết bị lưu trữ ngoại vi',
      'Qua máy chủ nội bộ của doanh nghiệp',
    ],
    correct: 1,
  },
  {
    id: 2,
    type: 'single',
    question: 'Thuật ngữ "điện toán đám mây" được xây dựng dựa trên nền tảng nào từ những năm 1980?',
    options: [
      'Điện toán lượng tử (quantum computing)',
      'Điện toán lưới (grid computing)',
      'Điện toán cục bộ (local computing)',
      'Điện toán di động (mobile computing)',
    ],
    correct: 1,
  },
  {
    id: 3,
    type: 'single',
    question: 'Thuật ngữ "đám mây" trong điện toán đám mây ám chỉ điều gì?',
    options: [
      'Một loại phần cứng lưu trữ dữ liệu',
      'Mạng Internet và độ phức tạp của cơ sở hạ tầng',
      'Một phần mềm quản lý tài nguyên',
      'Hệ thống máy chủ vật lý tại trung tâm dữ liệu',
    ],
    correct: 1,
  },
  {
    id: 4,
    type: 'single',
    question: 'Đặc điểm chính của Hạ tầng như một Dịch vụ (IaaS) là gì?',
    options: [
      'Cung cấp ứng dụng phần mềm qua internet',
      'Cung cấp hạ tầng máy tính dưới dạng dịch vụ',
      'Cung cấp nền tảng để phát triển và triển khai ứng dụng',
      'Quản lý quan hệ khách hàng',
    ],
    correct: 1,
  },
  {
    id: 5,
    type: 'single',
    question: 'Lợi ích chính của Phần mềm như một Dịch vụ (SaaS) là gì?',
    options: [
      'Tùy chỉnh cao và yêu cầu cập nhật thường xuyên',
      'Chi phí thấp và ứng dụng đáng tin cậy',
      'Yêu cầu quản lý phần cứng phức tạp',
      'Khả năng mở rộng hạn chế',
    ],
    correct: 1,
  },
  {
    id: 6,
    type: 'single',
    question: 'Mô hình dịch vụ nào cho phép người dùng truy cập ứng dụng mà không cần quản lý phần cứng/phần mềm bên dưới?',
    options: ['IaaS', 'SaaS', 'PaaS', 'Không có mô hình nào'],
    correct: 1,
  },
  {
    id: 7,
    type: 'single',
    question: 'Mô hình dịch vụ nào được mô tả là cung cấp môi trường hoàn chỉnh để phát triển và triển khai ứng dụng web?',
    options: ['IaaS', 'PaaS', 'SaaS', 'CloudSim'],
    correct: 1,
  },
  {
    id: 8,
    type: 'single',
    question: 'Yếu tố nào được đề cập là điển hình của dịch vụ SaaS?',
    options: [
      'Lưu trữ cơ sở dữ liệu',
      'Quản lý quan hệ khách hàng (CRM)',
      'Quản lý máy chủ vật lý',
      'Cấu hình máy ảo',
    ],
    correct: 1,
  },
  {
    id: 9,
    type: 'single',
    question: 'PaaS loại bỏ điều gì cho các nhà phát triển?',
    options: [
      'Khả năng tùy chỉnh ứng dụng',
      'Sự phức tạp trong quản lý lớp phần cứng và phần mềm',
      'Nhu cầu kết nối internet',
      'Nhu cầu viết mã',
    ],
    correct: 1,
  },
  {
    id: 10,
    type: 'single',
    question: 'Mô hình dịch vụ nào cho phép nhiều công ty cùng sử dụng ứng dụng do nhà cung cấp lưu trữ?',
    options: ['SaaS', 'PaaS', 'IaaS', 'Không có mô hình nào'],
    correct: 0,
  },
  {
    id: 11,
    type: 'single',
    question: 'Công nghệ nào được đề cập là sử dụng rộng rãi cho bảo mật trong ứng dụng SaaS?',
    options: ['SSL', 'HTTP', 'VPN', 'FTP'],
    correct: 0,
  },
  {
    id: 12,
    type: 'single',
    question: 'Đâu là nhà cung cấp dịch vụ PaaS phổ biến nhất?',
    options: ['Amazon EC2', 'Google App Engine', 'Microsoft Office 365', 'DotNetNuke'],
    correct: 1,
  },
  {
    id: 13,
    type: 'single',
    question: 'Từ viết tắt SPI trong điện toán đám mây có nghĩa là gì?',
    options: [
      'Dịch vụ, Quy trình, Tích hợp',
      'Phần mềm, Nền tảng, Hạ tầng',
      'Hệ thống, Hiệu suất, Giao diện',
      'Bảo mật, Riêng tư, Thông minh',
    ],
    correct: 1,
  },
  {
    id: 14,
    type: 'single',
    question: 'Điều nào sau đây KHÔNG phải là lợi ích của IaaS?',
    options: [
      'Khả năng mở rộng linh hoạt',
      'Nhiều người thuê cùng sử dụng một tài nguyên',
      'Tùy chỉnh phần mềm cao mà không cần quản lý phần cứng',
      'Chi phí thay đổi dựa trên mức sử dụng thực tế',
    ],
    correct: 2,
  },
  {
    id: 15,
    type: 'single',
    question: 'Google App Engine hỗ trợ những ngôn ngữ lập trình nào?',
    options: ['C++ và Ruby', 'Java và Python', 'Python và C#', 'PHP và JavaScript'],
    correct: 1,
  },
];

export const lessons: Lesson[] = [
  {
    id: 1,
    title: 'Bài 1',
    subtitle: 'Mô hình dịch vụ đám mây (SaaS, PaaS, IaaS)',
    icon: '☁️',
    questions: lesson1,
    available: true,
  },
  {
    id: 2,
    title: 'Bài 2',
    subtitle: 'Mô hình triển khai (Public, Private, Hybrid)',
    icon: '🏗️',
    questions: [],
    available: false,
  },
  {
    id: 3,
    title: 'Bài 3',
    subtitle: 'Grid Computing, SOA & Điện toán đám mây',
    icon: '🔗',
    questions: [],
    available: false,
  },
  {
    id: 4,
    title: 'Bài 4',
    subtitle: 'AWS, Azure, GCP & Salesforce',
    icon: '🌐',
    questions: [],
    available: false,
  },
  {
    id: 5,
    title: 'Bài 5',
    subtitle: 'Ảo hóa, SDN & NFV',
    icon: '⚙️',
    questions: [],
    available: false,
  },
  {
    id: 6,
    title: 'Bài 6',
    subtitle: 'Ảo hóa lưu trữ & VDI',
    icon: '💾',
    questions: [],
    available: false,
  },
  {
    id: 7,
    title: 'Bài 7',
    subtitle: 'VMware ESXi 6.7',
    icon: '🖥️',
    questions: [],
    available: false,
  },
  {
    id: 8,
    title: 'Bài 8',
    subtitle: 'Sắp cập nhật',
    icon: '📚',
    questions: [],
    available: false,
  },
  {
    id: 9,
    title: 'Bài 9',
    subtitle: 'Sắp cập nhật',
    icon: '🎓',
    questions: [],
    available: false,
  },
];
