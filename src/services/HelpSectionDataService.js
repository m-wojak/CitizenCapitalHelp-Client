import http from "../http-common";
class HelpSectionDataService {
  getAll() {
    return http.get("/help_sections");
  }
  get(id) {
    return http.get(`/help_sections/${id}`);
  }
  create(data) {
    return http.post("/help_sections", data);
  }
  update(id, data) {
    return http.put(`/help_sections/${id}`, data);
  }
  delete(id) {
    return http.delete(`/help_sections/${id}`);
  }
  deleteAll() {
    return http.delete(`/help_sections`);
  }
  findByTitle(title) {
    return http.get(`/help_sections?title=${title}`);
  }
  findOneByTopicAndTitle(topic,title) {
    return http.get(`/help_sections/${topic}/${title}`);
  }
  findByTopic(topic) {
    return http.get(`/help_sections/topic/${topic}`);
  }
}
export default new HelpSectionDataService();
