// <copyright file="ProjectRepository.cs" company="Acme">
// Copyright (c) Acme. All rights reserved.
// </copyright>

namespace Acme.Productivity.Pomodoro.Data.EntityFramework
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    using Acme.Productivity.Pomodoro.Data.EntityFramework.Model;

    using AutoMapper;

    using Project = Acme.Productivity.Pomodoro.Core.Project;

    /// <summary>
    /// Manage all projects for a user.
    /// </summary>
    public class ProjectRepository : IProjectRepository
    {
        private readonly PomodoroContext context;
        private readonly IMapper mapper;

        /// <summary>
        /// Initializes a new instance of the <see cref="ProjectRepository"/> class.
        /// </summary>
        /// <param name="context">The pomodoro context.</param>
        /// <param name="mapper">The auto mapper instance.</param>
        public ProjectRepository(PomodoroContext context, IMapper mapper)
        {
            this.context = context;
            this.mapper = mapper;
        }

        /// <inheritdoc />
        public List<Project> GetUserProjects(Guid userId)
        {
            var projects = this.context.Projects.Where(x => x.UserId == userId && !x.IsDeleted).OrderBy(x => x.Name).ToList();
            return this.mapper.Map<List<Project>>(projects);
        }
    }
}