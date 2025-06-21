function downloadResume() {
  const link = document.createElement('a');
  link.href = 'resume/Yeabsira_Sisay_Resume.pdf';
  link.download = 'Yeabsira_Sisay_Resume.pdf';
  link.click();
}
