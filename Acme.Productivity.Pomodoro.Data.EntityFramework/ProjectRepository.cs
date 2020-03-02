// <copyright file="ProjectRepository.cs" company="Acme">
// Copyright (c) Acme. All rights reserved.
// </copyright>

namespace Acme.Productivity.Pomodoro.Data.EntityFramework
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    using Acme.Productivity.Pomodoro.Core.Tools;
    using Acme.Productivity.Pomodoro.Data.EntityFramework.Model;

    using AutoMapper;

    using Project = Acme.Productivity.Pomodoro.Core.Project;

    /// <summary>
    /// Manage all projects for a user.
    /// </summary>
    public class ProjectRepository : BaseRepository, IProjectRepository
    {
        private readonly PomodoroContext context;
        private readonly IMapper mapper;

        /// <summary>
        /// Initializes a new instance of the <see cref="ProjectRepository" /> class.
        /// </summary>
        /// <param name="context">The pomodoro context.</param>
        /// <param name="mapper">The auto mapper instance.</param>
        public ProjectRepository(PomodoroContext context, IMapper mapper)
        {
            this.context = context;
            this.mapper = mapper;
        }

        /// <inheritdoc />
        public void Add(Guid userId, string projectName)
        {
            var project = new Model.Project();
            project.Id = SecurityEngine.GenerateId();
            project.UserId = userId;
            project.Name = projectName;

            this.SetCreated(project, userId);

            this.context.Projects.Add(project);
            this.context.SaveChanges();
        }

        /// <inheritdoc />
        public void Delete(Guid userId, Guid projectId)
        {
            var project = this.context.Projects.SingleOrDefault(x => x.Id == projectId && x.UserId == userId);

            if (project == null)
            {
                return;
            }

            this.SetDeleted(project, userId);

            this.context.SaveChanges();
        }

        /// <inheritdoc />
        public Project Get(Guid userId, Guid projectId)
        {
            var project = this.context.Projects.SingleOrDefault(x => x.Id == projectId && x.UserId == userId);
            return this.mapper.Map<Project>(project);
        }

        /// <inheritdoc />
        public List<Project> GetAll(Guid userId)
        {
            var projects = this.context.Projects.Where(x => x.UserId == userId && !x.IsDeleted).OrderBy(x => x.Name).ToList();
            return this.mapper.Map<List<Project>>(projects);
        }

        /// <inheritdoc />
        public void Update(Guid userId, Guid projectId, string name)
        {
            var project = this.context.Projects.SingleOrDefault(x => x.Id == projectId && x.UserId == userId);

            if (project == null)
            {
                return;
            }

            project.Name = name;
            this.SetUpdated(project, userId);
            this.context.SaveChanges();
        }
    }
}